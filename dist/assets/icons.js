"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pausedIcon = exports.defaultIcon = void 0;
exports.defaultIcon = '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';
exports.pausedIcon = 'iVBORw0KGgoAAAANSUhEUgAAAHcAAACXCAYAAAAvfcQIAAAEbnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMkVsZWN0cm9uJTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIwLTAxLTI2VDAwJTNBMjQlM0EwNC41MDJaJTIyJTIwYWdlbnQlM0QlMjJNb3ppbGxhJTJGNS4wJTIwKE1hY2ludG9zaCUzQiUyMEludGVsJTIwTWFjJTIwT1MlMjBYJTIwMTBfMTVfMiklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBkcmF3LmlvJTJGMTIuNS4zJTIwQ2hyb21lJTJGNzguMC4zOTA0LjEzMCUyMEVsZWN0cm9uJTJGNy4xLjklMjBTYWZhcmklMkY1MzcuMzYlMjIlMjB2ZXJzaW9uJTNEJTIyMTIuNS4zJTIyJTIwZXRhZyUzRCUyMmlvZGtpRXNURzdFcm5RbnZQNXVyJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMjNSZ3BHVlFKSVNEaUJTdmZjYnBoJTIyJTNFN1pYQmN0c2dFSWFmUnNkNFFOZ1QlMkI1ZzRhWHZwVEdaODZKbUlqY1FVc1JxTUlydFBYeFNCRUpZU3A5TWVxNHZFeiUyQjRDMzclMkJNTXJhdlQxOE5iNnJ2S0VCbE9SR25qRDFrZVU3Sk9uZXZYamtQeXUyYURFSnBwUEJCVVRqSVh4QXl2ZHBLQWNjazBDSXFLNXRVTEZCcktHeWljV093UzhOZVVLV3JOcnlFbVhBb3VKcXJQNlN3MWFCdU55VHEzMENXVlZpWkVqOVQ4eERzaFdQRkJYWVRpVDFtYkc4UTdmQlZuJTJGYWdlbmlCeTVEMzVaM1pjV01HdFAxTWdqZmlsYXZXbjgzdnk1N0RZVXVEYlpPeGU0T1dXNG5hcVRkMFM1emljOEZZT0MxeDU4JTJCaEJwbnZpNDZuZFcwQ1dJTTFaeGZpQzIwQ01kOGhPZDJ1cU45YkY1RlRlcnZha04za0dVS3FLWDFHVjF1dmMyOThPUzRZMmJnUGoyY1pGYnVPeWhySmRkbVA3cnRLV2pnMHZPaW5PbmNObkZiWjJoViUyRm9C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';
//# sourceMappingURL=icons.js.map