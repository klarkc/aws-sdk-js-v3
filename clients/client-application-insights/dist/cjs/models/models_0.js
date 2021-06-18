"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLogPatternsRequest =
  exports.ListConfigurationHistoryResponse =
  exports.ListConfigurationHistoryRequest =
  exports.ListComponentsResponse =
  exports.ListComponentsRequest =
  exports.ListApplicationsResponse =
  exports.ListApplicationsRequest =
  exports.DescribeProblemObservationsResponse =
  exports.RelatedObservations =
  exports.DescribeProblemObservationsRequest =
  exports.DescribeProblemResponse =
  exports.Problem =
  exports.DescribeProblemRequest =
  exports.DescribeObservationResponse =
  exports.Observation =
  exports.DescribeObservationRequest =
  exports.DescribeLogPatternResponse =
  exports.DescribeLogPatternRequest =
  exports.DescribeComponentConfigurationRecommendationResponse =
  exports.DescribeComponentConfigurationRecommendationRequest =
  exports.DescribeComponentConfigurationResponse =
  exports.DescribeComponentConfigurationRequest =
  exports.DescribeComponentResponse =
  exports.DescribeComponentRequest =
  exports.DescribeApplicationResponse =
  exports.DescribeApplicationRequest =
  exports.DeleteLogPatternResponse =
  exports.DeleteLogPatternRequest =
  exports.DeleteComponentResponse =
  exports.DeleteComponentRequest =
  exports.DeleteApplicationResponse =
  exports.DeleteApplicationRequest =
  exports.CreateLogPatternResponse =
  exports.LogPattern =
  exports.CreateLogPatternRequest =
  exports.CreateComponentResponse =
  exports.CreateComponentRequest =
  exports.ValidationException =
  exports.TagsAlreadyExistException =
  exports.ResourceNotFoundException =
  exports.ResourceInUseException =
  exports.InternalServerException =
  exports.CreateApplicationResponse =
  exports.CreateApplicationRequest =
  exports.Tag =
  exports.ConfigurationEvent =
  exports.BadRequestException =
  exports.ApplicationInfo =
  exports.ApplicationComponent =
  exports.AccessDeniedException =
    void 0;
exports.UpdateLogPatternResponse =
  exports.UpdateLogPatternRequest =
  exports.UpdateComponentConfigurationResponse =
  exports.UpdateComponentConfigurationRequest =
  exports.UpdateComponentResponse =
  exports.UpdateComponentRequest =
  exports.UpdateApplicationResponse =
  exports.UpdateApplicationRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TooManyTagsException =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListProblemsResponse =
  exports.ListProblemsRequest =
  exports.ListLogPatternSetsResponse =
  exports.ListLogPatternSetsRequest =
  exports.ListLogPatternsResponse =
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
var ApplicationComponent;
(function (ApplicationComponent) {
  /**
   * @internal
   */
  ApplicationComponent.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplicationComponent = exports.ApplicationComponent || (exports.ApplicationComponent = {})));
var ApplicationInfo;
(function (ApplicationInfo) {
  /**
   * @internal
   */
  ApplicationInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplicationInfo = exports.ApplicationInfo || (exports.ApplicationInfo = {})));
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var ConfigurationEvent;
(function (ConfigurationEvent) {
  /**
   * @internal
   */
  ConfigurationEvent.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConfigurationEvent = exports.ConfigurationEvent || (exports.ConfigurationEvent = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
  /**
   * @internal
   */
  CreateApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {})));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
  /**
   * @internal
   */
  CreateApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {})));
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var TagsAlreadyExistException;
(function (TagsAlreadyExistException) {
  /**
   * @internal
   */
  TagsAlreadyExistException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagsAlreadyExistException = exports.TagsAlreadyExistException || (exports.TagsAlreadyExistException = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var CreateComponentRequest;
(function (CreateComponentRequest) {
  /**
   * @internal
   */
  CreateComponentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateComponentRequest = exports.CreateComponentRequest || (exports.CreateComponentRequest = {})));
var CreateComponentResponse;
(function (CreateComponentResponse) {
  /**
   * @internal
   */
  CreateComponentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateComponentResponse = exports.CreateComponentResponse || (exports.CreateComponentResponse = {})));
var CreateLogPatternRequest;
(function (CreateLogPatternRequest) {
  /**
   * @internal
   */
  CreateLogPatternRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateLogPatternRequest = exports.CreateLogPatternRequest || (exports.CreateLogPatternRequest = {})));
var LogPattern;
(function (LogPattern) {
  /**
   * @internal
   */
  LogPattern.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LogPattern = exports.LogPattern || (exports.LogPattern = {})));
var CreateLogPatternResponse;
(function (CreateLogPatternResponse) {
  /**
   * @internal
   */
  CreateLogPatternResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateLogPatternResponse = exports.CreateLogPatternResponse || (exports.CreateLogPatternResponse = {})));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
  /**
   * @internal
   */
  DeleteApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {})));
var DeleteApplicationResponse;
(function (DeleteApplicationResponse) {
  /**
   * @internal
   */
  DeleteApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApplicationResponse = exports.DeleteApplicationResponse || (exports.DeleteApplicationResponse = {})));
var DeleteComponentRequest;
(function (DeleteComponentRequest) {
  /**
   * @internal
   */
  DeleteComponentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteComponentRequest = exports.DeleteComponentRequest || (exports.DeleteComponentRequest = {})));
var DeleteComponentResponse;
(function (DeleteComponentResponse) {
  /**
   * @internal
   */
  DeleteComponentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteComponentResponse = exports.DeleteComponentResponse || (exports.DeleteComponentResponse = {})));
var DeleteLogPatternRequest;
(function (DeleteLogPatternRequest) {
  /**
   * @internal
   */
  DeleteLogPatternRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteLogPatternRequest = exports.DeleteLogPatternRequest || (exports.DeleteLogPatternRequest = {})));
var DeleteLogPatternResponse;
(function (DeleteLogPatternResponse) {
  /**
   * @internal
   */
  DeleteLogPatternResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteLogPatternResponse = exports.DeleteLogPatternResponse || (exports.DeleteLogPatternResponse = {})));
var DescribeApplicationRequest;
(function (DescribeApplicationRequest) {
  /**
   * @internal
   */
  DescribeApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeApplicationRequest = exports.DescribeApplicationRequest || (exports.DescribeApplicationRequest = {})));
var DescribeApplicationResponse;
(function (DescribeApplicationResponse) {
  /**
   * @internal
   */
  DescribeApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeApplicationResponse = exports.DescribeApplicationResponse || (exports.DescribeApplicationResponse = {})));
var DescribeComponentRequest;
(function (DescribeComponentRequest) {
  /**
   * @internal
   */
  DescribeComponentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeComponentRequest = exports.DescribeComponentRequest || (exports.DescribeComponentRequest = {})));
var DescribeComponentResponse;
(function (DescribeComponentResponse) {
  /**
   * @internal
   */
  DescribeComponentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeComponentResponse = exports.DescribeComponentResponse || (exports.DescribeComponentResponse = {})));
var DescribeComponentConfigurationRequest;
(function (DescribeComponentConfigurationRequest) {
  /**
   * @internal
   */
  DescribeComponentConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeComponentConfigurationRequest =
    exports.DescribeComponentConfigurationRequest || (exports.DescribeComponentConfigurationRequest = {}))
);
var DescribeComponentConfigurationResponse;
(function (DescribeComponentConfigurationResponse) {
  /**
   * @internal
   */
  DescribeComponentConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeComponentConfigurationResponse =
    exports.DescribeComponentConfigurationResponse || (exports.DescribeComponentConfigurationResponse = {}))
);
var DescribeComponentConfigurationRecommendationRequest;
(function (DescribeComponentConfigurationRecommendationRequest) {
  /**
   * @internal
   */
  DescribeComponentConfigurationRecommendationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeComponentConfigurationRecommendationRequest =
    exports.DescribeComponentConfigurationRecommendationRequest ||
    (exports.DescribeComponentConfigurationRecommendationRequest = {}))
);
var DescribeComponentConfigurationRecommendationResponse;
(function (DescribeComponentConfigurationRecommendationResponse) {
  /**
   * @internal
   */
  DescribeComponentConfigurationRecommendationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeComponentConfigurationRecommendationResponse =
    exports.DescribeComponentConfigurationRecommendationResponse ||
    (exports.DescribeComponentConfigurationRecommendationResponse = {}))
);
var DescribeLogPatternRequest;
(function (DescribeLogPatternRequest) {
  /**
   * @internal
   */
  DescribeLogPatternRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeLogPatternRequest = exports.DescribeLogPatternRequest || (exports.DescribeLogPatternRequest = {})));
var DescribeLogPatternResponse;
(function (DescribeLogPatternResponse) {
  /**
   * @internal
   */
  DescribeLogPatternResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeLogPatternResponse = exports.DescribeLogPatternResponse || (exports.DescribeLogPatternResponse = {})));
var DescribeObservationRequest;
(function (DescribeObservationRequest) {
  /**
   * @internal
   */
  DescribeObservationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeObservationRequest = exports.DescribeObservationRequest || (exports.DescribeObservationRequest = {})));
var Observation;
(function (Observation) {
  /**
   * @internal
   */
  Observation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Observation = exports.Observation || (exports.Observation = {})));
var DescribeObservationResponse;
(function (DescribeObservationResponse) {
  /**
   * @internal
   */
  DescribeObservationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeObservationResponse = exports.DescribeObservationResponse || (exports.DescribeObservationResponse = {})));
var DescribeProblemRequest;
(function (DescribeProblemRequest) {
  /**
   * @internal
   */
  DescribeProblemRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeProblemRequest = exports.DescribeProblemRequest || (exports.DescribeProblemRequest = {})));
var Problem;
(function (Problem) {
  /**
   * @internal
   */
  Problem.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Problem = exports.Problem || (exports.Problem = {})));
var DescribeProblemResponse;
(function (DescribeProblemResponse) {
  /**
   * @internal
   */
  DescribeProblemResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeProblemResponse = exports.DescribeProblemResponse || (exports.DescribeProblemResponse = {})));
var DescribeProblemObservationsRequest;
(function (DescribeProblemObservationsRequest) {
  /**
   * @internal
   */
  DescribeProblemObservationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeProblemObservationsRequest =
    exports.DescribeProblemObservationsRequest || (exports.DescribeProblemObservationsRequest = {}))
);
var RelatedObservations;
(function (RelatedObservations) {
  /**
   * @internal
   */
  RelatedObservations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RelatedObservations = exports.RelatedObservations || (exports.RelatedObservations = {})));
var DescribeProblemObservationsResponse;
(function (DescribeProblemObservationsResponse) {
  /**
   * @internal
   */
  DescribeProblemObservationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeProblemObservationsResponse =
    exports.DescribeProblemObservationsResponse || (exports.DescribeProblemObservationsResponse = {}))
);
var ListApplicationsRequest;
(function (ListApplicationsRequest) {
  /**
   * @internal
   */
  ListApplicationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListApplicationsRequest = exports.ListApplicationsRequest || (exports.ListApplicationsRequest = {})));
var ListApplicationsResponse;
(function (ListApplicationsResponse) {
  /**
   * @internal
   */
  ListApplicationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListApplicationsResponse = exports.ListApplicationsResponse || (exports.ListApplicationsResponse = {})));
var ListComponentsRequest;
(function (ListComponentsRequest) {
  /**
   * @internal
   */
  ListComponentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListComponentsRequest = exports.ListComponentsRequest || (exports.ListComponentsRequest = {})));
var ListComponentsResponse;
(function (ListComponentsResponse) {
  /**
   * @internal
   */
  ListComponentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListComponentsResponse = exports.ListComponentsResponse || (exports.ListComponentsResponse = {})));
var ListConfigurationHistoryRequest;
(function (ListConfigurationHistoryRequest) {
  /**
   * @internal
   */
  ListConfigurationHistoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListConfigurationHistoryRequest =
    exports.ListConfigurationHistoryRequest || (exports.ListConfigurationHistoryRequest = {}))
);
var ListConfigurationHistoryResponse;
(function (ListConfigurationHistoryResponse) {
  /**
   * @internal
   */
  ListConfigurationHistoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListConfigurationHistoryResponse =
    exports.ListConfigurationHistoryResponse || (exports.ListConfigurationHistoryResponse = {}))
);
var ListLogPatternsRequest;
(function (ListLogPatternsRequest) {
  /**
   * @internal
   */
  ListLogPatternsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListLogPatternsRequest = exports.ListLogPatternsRequest || (exports.ListLogPatternsRequest = {})));
var ListLogPatternsResponse;
(function (ListLogPatternsResponse) {
  /**
   * @internal
   */
  ListLogPatternsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListLogPatternsResponse = exports.ListLogPatternsResponse || (exports.ListLogPatternsResponse = {})));
var ListLogPatternSetsRequest;
(function (ListLogPatternSetsRequest) {
  /**
   * @internal
   */
  ListLogPatternSetsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListLogPatternSetsRequest = exports.ListLogPatternSetsRequest || (exports.ListLogPatternSetsRequest = {})));
var ListLogPatternSetsResponse;
(function (ListLogPatternSetsResponse) {
  /**
   * @internal
   */
  ListLogPatternSetsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListLogPatternSetsResponse = exports.ListLogPatternSetsResponse || (exports.ListLogPatternSetsResponse = {})));
var ListProblemsRequest;
(function (ListProblemsRequest) {
  /**
   * @internal
   */
  ListProblemsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListProblemsRequest = exports.ListProblemsRequest || (exports.ListProblemsRequest = {})));
var ListProblemsResponse;
(function (ListProblemsResponse) {
  /**
   * @internal
   */
  ListProblemsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListProblemsResponse = exports.ListProblemsResponse || (exports.ListProblemsResponse = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
  /**
   * @internal
   */
  UpdateApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {})));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
  /**
   * @internal
   */
  UpdateApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {})));
var UpdateComponentRequest;
(function (UpdateComponentRequest) {
  /**
   * @internal
   */
  UpdateComponentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateComponentRequest = exports.UpdateComponentRequest || (exports.UpdateComponentRequest = {})));
var UpdateComponentResponse;
(function (UpdateComponentResponse) {
  /**
   * @internal
   */
  UpdateComponentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateComponentResponse = exports.UpdateComponentResponse || (exports.UpdateComponentResponse = {})));
var UpdateComponentConfigurationRequest;
(function (UpdateComponentConfigurationRequest) {
  /**
   * @internal
   */
  UpdateComponentConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateComponentConfigurationRequest =
    exports.UpdateComponentConfigurationRequest || (exports.UpdateComponentConfigurationRequest = {}))
);
var UpdateComponentConfigurationResponse;
(function (UpdateComponentConfigurationResponse) {
  /**
   * @internal
   */
  UpdateComponentConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateComponentConfigurationResponse =
    exports.UpdateComponentConfigurationResponse || (exports.UpdateComponentConfigurationResponse = {}))
);
var UpdateLogPatternRequest;
(function (UpdateLogPatternRequest) {
  /**
   * @internal
   */
  UpdateLogPatternRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateLogPatternRequest = exports.UpdateLogPatternRequest || (exports.UpdateLogPatternRequest = {})));
var UpdateLogPatternResponse;
(function (UpdateLogPatternResponse) {
  /**
   * @internal
   */
  UpdateLogPatternResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateLogPatternResponse = exports.UpdateLogPatternResponse || (exports.UpdateLogPatternResponse = {})));
//# sourceMappingURL=models_0.js.map
