Projects = new Mongo.Collection("projects");

Projects.attachSchema(
    new SimpleSchema({
        title: {
            type: String,
            label: "Project Title",
            max: 128
        },
        category: {
            type: String,
            label: 'Category'
        },
        description: {
            type: String,
            max: 20000,
            //autoform: {
            //    afFieldInput: SUMMERNOTE_OPTIONS
            //}
        },
        tags: {
            type: Array,
            optional: true
        },
        "tags.$": {
            type: String
        },
        url_image: {
            type: String,
            label: "URL Image",
            max: 256,
            optional: true,
            regEx: SimpleSchema.RegEx.Url
        },
        // Force value to be current date (on server) upon insert
        // and prevent updates thereafter.
        createdAt: {
            type: Date,
            autoValue: function() {
                if (this.isInsert) {
                    return new Date();
                } else if (this.isUpsert) {
                    return {
                        $setOnInsert: new Date()
                    };
                } else {
                    this.unset();
                }
            },
            denyUpdate: true
        },
        // Force value to be current date (on server) upon update
        // and don't allow it to be set upon insert.
        updatedAt: {
            type: Date,
            autoValue: function() {
                if (this.isUpdate) {
                    return new Date();
                }
            },
            denyInsert: true,
            optional: true
        }
    })
);