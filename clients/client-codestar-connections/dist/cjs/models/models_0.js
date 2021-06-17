"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHostOutput = exports.UpdateHostInput = exports.UnsupportedOperationException = exports.ConflictException = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListHostsOutput = exports.Host = exports.ListHostsInput = exports.ListConnectionsOutput = exports.ListConnectionsInput = exports.GetHostOutput = exports.GetHostInput = exports.GetConnectionOutput = exports.Connection = exports.ConnectionStatus = exports.GetConnectionInput = exports.DeleteHostOutput = exports.DeleteHostInput = exports.DeleteConnectionOutput = exports.DeleteConnectionInput = exports.CreateHostOutput = exports.CreateHostInput = exports.VpcConfiguration = exports.ResourceUnavailableException = exports.ResourceNotFoundException = exports.LimitExceededException = exports.CreateConnectionOutput = exports.CreateConnectionInput = exports.Tag = exports.ProviderType = void 0;
var ProviderType;
(function (ProviderType) {
    ProviderType["BITBUCKET"] = "Bitbucket";
    ProviderType["GITHUB"] = "GitHub";
    ProviderType["GITHUB_ENTERPRISE_SERVER"] = "GitHubEnterpriseServer";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateConnectionInput;
(function (CreateConnectionInput) {
    /**
     * @internal
     */
    CreateConnectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionInput = exports.CreateConnectionInput || (exports.CreateConnectionInput = {}));
var CreateConnectionOutput;
(function (CreateConnectionOutput) {
    /**
     * @internal
     */
    CreateConnectionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionOutput = exports.CreateConnectionOutput || (exports.CreateConnectionOutput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var VpcConfiguration;
(function (VpcConfiguration) {
    /**
     * @internal
     */
    VpcConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfiguration = exports.VpcConfiguration || (exports.VpcConfiguration = {}));
var CreateHostInput;
(function (CreateHostInput) {
    /**
     * @internal
     */
    CreateHostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHostInput = exports.CreateHostInput || (exports.CreateHostInput = {}));
var CreateHostOutput;
(function (CreateHostOutput) {
    /**
     * @internal
     */
    CreateHostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHostOutput = exports.CreateHostOutput || (exports.CreateHostOutput = {}));
var DeleteConnectionInput;
(function (DeleteConnectionInput) {
    /**
     * @internal
     */
    DeleteConnectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionInput = exports.DeleteConnectionInput || (exports.DeleteConnectionInput = {}));
var DeleteConnectionOutput;
(function (DeleteConnectionOutput) {
    /**
     * @internal
     */
    DeleteConnectionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionOutput = exports.DeleteConnectionOutput || (exports.DeleteConnectionOutput = {}));
var DeleteHostInput;
(function (DeleteHostInput) {
    /**
     * @internal
     */
    DeleteHostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHostInput = exports.DeleteHostInput || (exports.DeleteHostInput = {}));
var DeleteHostOutput;
(function (DeleteHostOutput) {
    /**
     * @internal
     */
    DeleteHostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHostOutput = exports.DeleteHostOutput || (exports.DeleteHostOutput = {}));
var GetConnectionInput;
(function (GetConnectionInput) {
    /**
     * @internal
     */
    GetConnectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionInput = exports.GetConnectionInput || (exports.GetConnectionInput = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["AVAILABLE"] = "AVAILABLE";
    ConnectionStatus["ERROR"] = "ERROR";
    ConnectionStatus["PENDING"] = "PENDING";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connection = exports.Connection || (exports.Connection = {}));
var GetConnectionOutput;
(function (GetConnectionOutput) {
    /**
     * @internal
     */
    GetConnectionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionOutput = exports.GetConnectionOutput || (exports.GetConnectionOutput = {}));
var GetHostInput;
(function (GetHostInput) {
    /**
     * @internal
     */
    GetHostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostInput = exports.GetHostInput || (exports.GetHostInput = {}));
var GetHostOutput;
(function (GetHostOutput) {
    /**
     * @internal
     */
    GetHostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostOutput = exports.GetHostOutput || (exports.GetHostOutput = {}));
var ListConnectionsInput;
(function (ListConnectionsInput) {
    /**
     * @internal
     */
    ListConnectionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectionsInput = exports.ListConnectionsInput || (exports.ListConnectionsInput = {}));
var ListConnectionsOutput;
(function (ListConnectionsOutput) {
    /**
     * @internal
     */
    ListConnectionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectionsOutput = exports.ListConnectionsOutput || (exports.ListConnectionsOutput = {}));
var ListHostsInput;
(function (ListHostsInput) {
    /**
     * @internal
     */
    ListHostsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostsInput = exports.ListHostsInput || (exports.ListHostsInput = {}));
var Host;
(function (Host) {
    /**
     * @internal
     */
    Host.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Host = exports.Host || (exports.Host = {}));
var ListHostsOutput;
(function (ListHostsOutput) {
    /**
     * @internal
     */
    ListHostsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostsOutput = exports.ListHostsOutput || (exports.ListHostsOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var UpdateHostInput;
(function (UpdateHostInput) {
    /**
     * @internal
     */
    UpdateHostInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHostInput = exports.UpdateHostInput || (exports.UpdateHostInput = {}));
var UpdateHostOutput;
(function (UpdateHostOutput) {
    /**
     * @internal
     */
    UpdateHostOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHostOutput = exports.UpdateHostOutput || (exports.UpdateHostOutput = {}));
//# sourceMappingURL=models_0.js.map