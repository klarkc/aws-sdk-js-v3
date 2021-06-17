"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCommandResult = exports.StartTransactionResult = exports.StartSessionResult = exports.SendCommandRequest = exports.StartTransactionRequest = exports.StartSessionRequest = exports.RateExceededException = exports.OccConflictException = exports.LimitExceededException = exports.InvalidSessionException = exports.FetchPageResult = exports.FetchPageRequest = exports.ExecuteStatementResult = exports.Page = exports.ExecuteStatementRequest = exports.ValueHolder = exports.EndSessionResult = exports.EndSessionRequest = exports.CommitTransactionResult = exports.IOUsage = exports.CommitTransactionRequest = exports.CapacityExceededException = exports.BadRequestException = exports.AbortTransactionResult = exports.TimingInformation = exports.AbortTransactionRequest = void 0;
var AbortTransactionRequest;
(function (AbortTransactionRequest) {
    /**
     * @internal
     */
    AbortTransactionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortTransactionRequest = exports.AbortTransactionRequest || (exports.AbortTransactionRequest = {}));
var TimingInformation;
(function (TimingInformation) {
    /**
     * @internal
     */
    TimingInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimingInformation = exports.TimingInformation || (exports.TimingInformation = {}));
var AbortTransactionResult;
(function (AbortTransactionResult) {
    /**
     * @internal
     */
    AbortTransactionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortTransactionResult = exports.AbortTransactionResult || (exports.AbortTransactionResult = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CapacityExceededException;
(function (CapacityExceededException) {
    /**
     * @internal
     */
    CapacityExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityExceededException = exports.CapacityExceededException || (exports.CapacityExceededException = {}));
var CommitTransactionRequest;
(function (CommitTransactionRequest) {
    /**
     * @internal
     */
    CommitTransactionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitTransactionRequest = exports.CommitTransactionRequest || (exports.CommitTransactionRequest = {}));
var IOUsage;
(function (IOUsage) {
    /**
     * @internal
     */
    IOUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IOUsage = exports.IOUsage || (exports.IOUsage = {}));
var CommitTransactionResult;
(function (CommitTransactionResult) {
    /**
     * @internal
     */
    CommitTransactionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommitTransactionResult = exports.CommitTransactionResult || (exports.CommitTransactionResult = {}));
var EndSessionRequest;
(function (EndSessionRequest) {
    /**
     * @internal
     */
    EndSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndSessionRequest = exports.EndSessionRequest || (exports.EndSessionRequest = {}));
var EndSessionResult;
(function (EndSessionResult) {
    /**
     * @internal
     */
    EndSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndSessionResult = exports.EndSessionResult || (exports.EndSessionResult = {}));
var ValueHolder;
(function (ValueHolder) {
    /**
     * @internal
     */
    ValueHolder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValueHolder = exports.ValueHolder || (exports.ValueHolder = {}));
var ExecuteStatementRequest;
(function (ExecuteStatementRequest) {
    /**
     * @internal
     */
    ExecuteStatementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteStatementRequest = exports.ExecuteStatementRequest || (exports.ExecuteStatementRequest = {}));
var Page;
(function (Page) {
    /**
     * @internal
     */
    Page.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Page = exports.Page || (exports.Page = {}));
var ExecuteStatementResult;
(function (ExecuteStatementResult) {
    /**
     * @internal
     */
    ExecuteStatementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteStatementResult = exports.ExecuteStatementResult || (exports.ExecuteStatementResult = {}));
var FetchPageRequest;
(function (FetchPageRequest) {
    /**
     * @internal
     */
    FetchPageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FetchPageRequest = exports.FetchPageRequest || (exports.FetchPageRequest = {}));
var FetchPageResult;
(function (FetchPageResult) {
    /**
     * @internal
     */
    FetchPageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FetchPageResult = exports.FetchPageResult || (exports.FetchPageResult = {}));
var InvalidSessionException;
(function (InvalidSessionException) {
    /**
     * @internal
     */
    InvalidSessionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSessionException = exports.InvalidSessionException || (exports.InvalidSessionException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var OccConflictException;
(function (OccConflictException) {
    /**
     * @internal
     */
    OccConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OccConflictException = exports.OccConflictException || (exports.OccConflictException = {}));
var RateExceededException;
(function (RateExceededException) {
    /**
     * @internal
     */
    RateExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RateExceededException = exports.RateExceededException || (exports.RateExceededException = {}));
var StartSessionRequest;
(function (StartSessionRequest) {
    /**
     * @internal
     */
    StartSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSessionRequest = exports.StartSessionRequest || (exports.StartSessionRequest = {}));
var StartTransactionRequest;
(function (StartTransactionRequest) {
    /**
     * @internal
     */
    StartTransactionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTransactionRequest = exports.StartTransactionRequest || (exports.StartTransactionRequest = {}));
var SendCommandRequest;
(function (SendCommandRequest) {
    /**
     * @internal
     */
    SendCommandRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendCommandRequest = exports.SendCommandRequest || (exports.SendCommandRequest = {}));
var StartSessionResult;
(function (StartSessionResult) {
    /**
     * @internal
     */
    StartSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSessionResult = exports.StartSessionResult || (exports.StartSessionResult = {}));
var StartTransactionResult;
(function (StartTransactionResult) {
    /**
     * @internal
     */
    StartTransactionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTransactionResult = exports.StartTransactionResult || (exports.StartTransactionResult = {}));
var SendCommandResult;
(function (SendCommandResult) {
    /**
     * @internal
     */
    SendCommandResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendCommandResult = exports.SendCommandResult || (exports.SendCommandResult = {}));
//# sourceMappingURL=models_0.js.map