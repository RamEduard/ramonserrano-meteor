Categories = new Mongo.Collection("categories");

Categories.attachSchema(
	new SimpleSchema({
		name: {
			type: String,
			label: 'Category Name',
			max: 128
		},
		description: {
			type: String,
			label: 'Description',
			max: 256
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