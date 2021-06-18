"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReportDefinitionResult =
  exports.UpdateReportDefinitionRequest =
  exports.ServiceQuotaExceededException =
  exports.PutReportDefinitionResult =
  exports.PutReportDefinitionRequest =
  exports.ListReportDefinitionsResult =
  exports.ReportDefinition =
  exports.ListReportDefinitionsRequest =
  exports.ImportApplicationUsageResult =
  exports.ImportApplicationUsageRequest =
  exports.SourceS3Location =
  exports.S3BucketRegion =
  exports.GetReportDefinitionResult =
  exports.ReportFrequency =
  exports.Format =
  exports.S3Location =
  exports.GetReportDefinitionRequest =
  exports.ValidationException =
  exports.ThrottlingException =
  exports.InternalServerException =
  exports.DeleteReportDefinitionResult =
  exports.DeleteReportDefinitionRequest =
  exports.AccessDeniedException =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var DeleteReportDefinitionRequest;
(function (DeleteReportDefinitionRequest) {
  /**
   * @internal
   */
  DeleteReportDefinitionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteReportDefinitionRequest =
    exports.DeleteReportDefinitionRequest || (exports.DeleteReportDefinitionRequest = {}))
);
var DeleteReportDefinitionResult;
(function (DeleteReportDefinitionResult) {
  /**
   * @internal
   */
  DeleteReportDefinitionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteReportDefinitionResult = exports.DeleteReportDefinitionResult || (exports.DeleteReportDefinitionResult = {}))
);
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var GetReportDefinitionRequest;
(function (GetReportDefinitionRequest) {
  /**
   * @internal
   */
  GetReportDefinitionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetReportDefinitionRequest = exports.GetReportDefinitionRequest || (exports.GetReportDefinitionRequest = {})));
var S3Location;
(function (S3Location) {
  /**
   * @internal
   */
  S3Location.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3Location = exports.S3Location || (exports.S3Location = {})));
var Format;
(function (Format) {
  Format["CSV"] = "CSV";
  Format["PARQUET"] = "PARQUET";
})((Format = exports.Format || (exports.Format = {})));
var ReportFrequency;
(function (ReportFrequency) {
  ReportFrequency["ALL"] = "ALL";
  ReportFrequency["DAILY"] = "DAILY";
  ReportFrequency["MONTHLY"] = "MONTHLY";
})((ReportFrequency = exports.ReportFrequency || (exports.ReportFrequency = {})));
var GetReportDefinitionResult;
(function (GetReportDefinitionResult) {
  /**
   * @internal
   */
  GetReportDefinitionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetReportDefinitionResult = exports.GetReportDefinitionResult || (exports.GetReportDefinitionResult = {})));
var S3BucketRegion;
(function (S3BucketRegion) {
  S3BucketRegion["AF_SOUTH_1"] = "af-south-1";
  S3BucketRegion["AP_EAST_1"] = "ap-east-1";
  S3BucketRegion["EU_SOUTH_1"] = "eu-south-1";
  S3BucketRegion["ME_SOUTH_1"] = "me-south-1";
})((S3BucketRegion = exports.S3BucketRegion || (exports.S3BucketRegion = {})));
var SourceS3Location;
(function (SourceS3Location) {
  /**
   * @internal
   */
  SourceS3Location.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SourceS3Location = exports.SourceS3Location || (exports.SourceS3Location = {})));
var ImportApplicationUsageRequest;
(function (ImportApplicationUsageRequest) {
  /**
   * @internal
   */
  ImportApplicationUsageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ImportApplicationUsageRequest =
    exports.ImportApplicationUsageRequest || (exports.ImportApplicationUsageRequest = {}))
);
var ImportApplicationUsageResult;
(function (ImportApplicationUsageResult) {
  /**
   * @internal
   */
  ImportApplicationUsageResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ImportApplicationUsageResult = exports.ImportApplicationUsageResult || (exports.ImportApplicationUsageResult = {}))
);
var ListReportDefinitionsRequest;
(function (ListReportDefinitionsRequest) {
  /**
   * @internal
   */
  ListReportDefinitionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListReportDefinitionsRequest = exports.ListReportDefinitionsRequest || (exports.ListReportDefinitionsRequest = {}))
);
var ReportDefinition;
(function (ReportDefinition) {
  /**
   * @internal
   */
  ReportDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ReportDefinition = exports.ReportDefinition || (exports.ReportDefinition = {})));
var ListReportDefinitionsResult;
(function (ListReportDefinitionsResult) {
  /**
   * @internal
   */
  ListReportDefinitionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListReportDefinitionsResult = exports.ListReportDefinitionsResult || (exports.ListReportDefinitionsResult = {})));
var PutReportDefinitionRequest;
(function (PutReportDefinitionRequest) {
  /**
   * @internal
   */
  PutReportDefinitionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutReportDefinitionRequest = exports.PutReportDefinitionRequest || (exports.PutReportDefinitionRequest = {})));
var PutReportDefinitionResult;
(function (PutReportDefinitionResult) {
  /**
   * @internal
   */
  PutReportDefinitionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutReportDefinitionResult = exports.PutReportDefinitionResult || (exports.PutReportDefinitionResult = {})));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceQuotaExceededException =
    exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}))
);
var UpdateReportDefinitionRequest;
(function (UpdateReportDefinitionRequest) {
  /**
   * @internal
   */
  UpdateReportDefinitionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateReportDefinitionRequest =
    exports.UpdateReportDefinitionRequest || (exports.UpdateReportDefinitionRequest = {}))
);
var UpdateReportDefinitionResult;
(function (UpdateReportDefinitionResult) {
  /**
   * @internal
   */
  UpdateReportDefinitionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateReportDefinitionResult = exports.UpdateReportDefinitionResult || (exports.UpdateReportDefinitionResult = {}))
);
//# sourceMappingURL=models_0.js.map
