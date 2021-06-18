"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventIntegrationResponse =
  exports.UpdateEventIntegrationRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListEventIntegrationsResponse =
  exports.EventIntegration =
  exports.ListEventIntegrationsRequest =
  exports.ListEventIntegrationAssociationsResponse =
  exports.EventIntegrationAssociation =
  exports.ListEventIntegrationAssociationsRequest =
  exports.GetEventIntegrationResponse =
  exports.GetEventIntegrationRequest =
  exports.ResourceNotFoundException =
  exports.DeleteEventIntegrationResponse =
  exports.DeleteEventIntegrationRequest =
  exports.ThrottlingException =
  exports.ResourceQuotaExceededException =
  exports.InvalidRequestException =
  exports.InternalServiceError =
  exports.DuplicateResourceException =
  exports.CreateEventIntegrationResponse =
  exports.CreateEventIntegrationRequest =
  exports.EventFilter =
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
var EventFilter;
(function (EventFilter) {
  /**
   * @internal
   */
  EventFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EventFilter = exports.EventFilter || (exports.EventFilter = {})));
var CreateEventIntegrationRequest;
(function (CreateEventIntegrationRequest) {
  /**
   * @internal
   */
  CreateEventIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateEventIntegrationRequest =
    exports.CreateEventIntegrationRequest || (exports.CreateEventIntegrationRequest = {}))
);
var CreateEventIntegrationResponse;
(function (CreateEventIntegrationResponse) {
  /**
   * @internal
   */
  CreateEventIntegrationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateEventIntegrationResponse =
    exports.CreateEventIntegrationResponse || (exports.CreateEventIntegrationResponse = {}))
);
var DuplicateResourceException;
(function (DuplicateResourceException) {
  /**
   * @internal
   */
  DuplicateResourceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DuplicateResourceException = exports.DuplicateResourceException || (exports.DuplicateResourceException = {})));
var InternalServiceError;
(function (InternalServiceError) {
  /**
   * @internal
   */
  InternalServiceError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServiceError = exports.InternalServiceError || (exports.InternalServiceError = {})));
var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {})));
var ResourceQuotaExceededException;
(function (ResourceQuotaExceededException) {
  /**
   * @internal
   */
  ResourceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ResourceQuotaExceededException =
    exports.ResourceQuotaExceededException || (exports.ResourceQuotaExceededException = {}))
);
var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {})));
var DeleteEventIntegrationRequest;
(function (DeleteEventIntegrationRequest) {
  /**
   * @internal
   */
  DeleteEventIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteEventIntegrationRequest =
    exports.DeleteEventIntegrationRequest || (exports.DeleteEventIntegrationRequest = {}))
);
var DeleteEventIntegrationResponse;
(function (DeleteEventIntegrationResponse) {
  /**
   * @internal
   */
  DeleteEventIntegrationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteEventIntegrationResponse =
    exports.DeleteEventIntegrationResponse || (exports.DeleteEventIntegrationResponse = {}))
);
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var GetEventIntegrationRequest;
(function (GetEventIntegrationRequest) {
  /**
   * @internal
   */
  GetEventIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetEventIntegrationRequest = exports.GetEventIntegrationRequest || (exports.GetEventIntegrationRequest = {})));
var GetEventIntegrationResponse;
(function (GetEventIntegrationResponse) {
  /**
   * @internal
   */
  GetEventIntegrationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetEventIntegrationResponse = exports.GetEventIntegrationResponse || (exports.GetEventIntegrationResponse = {})));
var ListEventIntegrationAssociationsRequest;
(function (ListEventIntegrationAssociationsRequest) {
  /**
   * @internal
   */
  ListEventIntegrationAssociationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListEventIntegrationAssociationsRequest =
    exports.ListEventIntegrationAssociationsRequest || (exports.ListEventIntegrationAssociationsRequest = {}))
);
var EventIntegrationAssociation;
(function (EventIntegrationAssociation) {
  /**
   * @internal
   */
  EventIntegrationAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EventIntegrationAssociation = exports.EventIntegrationAssociation || (exports.EventIntegrationAssociation = {})));
var ListEventIntegrationAssociationsResponse;
(function (ListEventIntegrationAssociationsResponse) {
  /**
   * @internal
   */
  ListEventIntegrationAssociationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListEventIntegrationAssociationsResponse =
    exports.ListEventIntegrationAssociationsResponse || (exports.ListEventIntegrationAssociationsResponse = {}))
);
var ListEventIntegrationsRequest;
(function (ListEventIntegrationsRequest) {
  /**
   * @internal
   */
  ListEventIntegrationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListEventIntegrationsRequest = exports.ListEventIntegrationsRequest || (exports.ListEventIntegrationsRequest = {}))
);
var EventIntegration;
(function (EventIntegration) {
  /**
   * @internal
   */
  EventIntegration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EventIntegration = exports.EventIntegration || (exports.EventIntegration = {})));
var ListEventIntegrationsResponse;
(function (ListEventIntegrationsResponse) {
  /**
   * @internal
   */
  ListEventIntegrationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListEventIntegrationsResponse =
    exports.ListEventIntegrationsResponse || (exports.ListEventIntegrationsResponse = {}))
);
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
var UpdateEventIntegrationRequest;
(function (UpdateEventIntegrationRequest) {
  /**
   * @internal
   */
  UpdateEventIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateEventIntegrationRequest =
    exports.UpdateEventIntegrationRequest || (exports.UpdateEventIntegrationRequest = {}))
);
var UpdateEventIntegrationResponse;
(function (UpdateEventIntegrationResponse) {
  /**
   * @internal
   */
  UpdateEventIntegrationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateEventIntegrationResponse =
    exports.UpdateEventIntegrationResponse || (exports.UpdateEventIntegrationResponse = {}))
);
//# sourceMappingURL=models_0.js.map
