"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFragmentsOutput = exports.Fragment = exports.ListFragmentsInput = exports.FragmentSelector = exports.TimestampRange = exports.FragmentSelectorType = exports.GetMediaForFragmentListOutput = exports.GetMediaForFragmentListInput = exports.GetHLSStreamingSessionURLOutput = exports.GetHLSStreamingSessionURLInput = exports.HLSPlaybackMode = exports.HLSFragmentSelector = exports.HLSTimestampRange = exports.HLSFragmentSelectorType = exports.HLSDisplayFragmentTimestamp = exports.HLSDiscontinuityMode = exports.ContainerFormat = exports.GetDASHStreamingSessionURLOutput = exports.GetDASHStreamingSessionURLInput = exports.DASHPlaybackMode = exports.DASHDisplayFragmentTimestamp = exports.DASHDisplayFragmentNumber = exports.DASHFragmentSelector = exports.DASHTimestampRange = exports.DASHFragmentSelectorType = exports.UnsupportedStreamMediaTypeException = exports.ResourceNotFoundException = exports.NotAuthorizedException = exports.NoDataRetentionException = exports.MissingCodecPrivateDataException = exports.InvalidMediaFrameException = exports.InvalidCodecPrivateDataException = exports.InvalidArgumentException = exports.GetClipOutput = exports.GetClipInput = exports.ClipFragmentSelector = exports.ClipTimestampRange = exports.ClipFragmentSelectorType = exports.ClientLimitExceededException = void 0;
var ClientLimitExceededException;
(function (ClientLimitExceededException) {
    /**
     * @internal
     */
    ClientLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientLimitExceededException = exports.ClientLimitExceededException || (exports.ClientLimitExceededException = {}));
var ClipFragmentSelectorType;
(function (ClipFragmentSelectorType) {
    ClipFragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    ClipFragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(ClipFragmentSelectorType = exports.ClipFragmentSelectorType || (exports.ClipFragmentSelectorType = {}));
var ClipTimestampRange;
(function (ClipTimestampRange) {
    /**
     * @internal
     */
    ClipTimestampRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClipTimestampRange = exports.ClipTimestampRange || (exports.ClipTimestampRange = {}));
var ClipFragmentSelector;
(function (ClipFragmentSelector) {
    /**
     * @internal
     */
    ClipFragmentSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClipFragmentSelector = exports.ClipFragmentSelector || (exports.ClipFragmentSelector = {}));
var GetClipInput;
(function (GetClipInput) {
    /**
     * @internal
     */
    GetClipInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClipInput = exports.GetClipInput || (exports.GetClipInput = {}));
var GetClipOutput;
(function (GetClipOutput) {
    /**
     * @internal
     */
    GetClipOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClipOutput = exports.GetClipOutput || (exports.GetClipOutput = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var InvalidCodecPrivateDataException;
(function (InvalidCodecPrivateDataException) {
    /**
     * @internal
     */
    InvalidCodecPrivateDataException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCodecPrivateDataException = exports.InvalidCodecPrivateDataException || (exports.InvalidCodecPrivateDataException = {}));
var InvalidMediaFrameException;
(function (InvalidMediaFrameException) {
    /**
     * @internal
     */
    InvalidMediaFrameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMediaFrameException = exports.InvalidMediaFrameException || (exports.InvalidMediaFrameException = {}));
var MissingCodecPrivateDataException;
(function (MissingCodecPrivateDataException) {
    /**
     * @internal
     */
    MissingCodecPrivateDataException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingCodecPrivateDataException = exports.MissingCodecPrivateDataException || (exports.MissingCodecPrivateDataException = {}));
var NoDataRetentionException;
(function (NoDataRetentionException) {
    /**
     * @internal
     */
    NoDataRetentionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoDataRetentionException = exports.NoDataRetentionException || (exports.NoDataRetentionException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var UnsupportedStreamMediaTypeException;
(function (UnsupportedStreamMediaTypeException) {
    /**
     * @internal
     */
    UnsupportedStreamMediaTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedStreamMediaTypeException = exports.UnsupportedStreamMediaTypeException || (exports.UnsupportedStreamMediaTypeException = {}));
var DASHFragmentSelectorType;
(function (DASHFragmentSelectorType) {
    DASHFragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    DASHFragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(DASHFragmentSelectorType = exports.DASHFragmentSelectorType || (exports.DASHFragmentSelectorType = {}));
var DASHTimestampRange;
(function (DASHTimestampRange) {
    /**
     * @internal
     */
    DASHTimestampRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DASHTimestampRange = exports.DASHTimestampRange || (exports.DASHTimestampRange = {}));
var DASHFragmentSelector;
(function (DASHFragmentSelector) {
    /**
     * @internal
     */
    DASHFragmentSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DASHFragmentSelector = exports.DASHFragmentSelector || (exports.DASHFragmentSelector = {}));
var DASHDisplayFragmentNumber;
(function (DASHDisplayFragmentNumber) {
    DASHDisplayFragmentNumber["ALWAYS"] = "ALWAYS";
    DASHDisplayFragmentNumber["NEVER"] = "NEVER";
})(DASHDisplayFragmentNumber = exports.DASHDisplayFragmentNumber || (exports.DASHDisplayFragmentNumber = {}));
var DASHDisplayFragmentTimestamp;
(function (DASHDisplayFragmentTimestamp) {
    DASHDisplayFragmentTimestamp["ALWAYS"] = "ALWAYS";
    DASHDisplayFragmentTimestamp["NEVER"] = "NEVER";
})(DASHDisplayFragmentTimestamp = exports.DASHDisplayFragmentTimestamp || (exports.DASHDisplayFragmentTimestamp = {}));
var DASHPlaybackMode;
(function (DASHPlaybackMode) {
    DASHPlaybackMode["LIVE"] = "LIVE";
    DASHPlaybackMode["LIVE_REPLAY"] = "LIVE_REPLAY";
    DASHPlaybackMode["ON_DEMAND"] = "ON_DEMAND";
})(DASHPlaybackMode = exports.DASHPlaybackMode || (exports.DASHPlaybackMode = {}));
var GetDASHStreamingSessionURLInput;
(function (GetDASHStreamingSessionURLInput) {
    /**
     * @internal
     */
    GetDASHStreamingSessionURLInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDASHStreamingSessionURLInput = exports.GetDASHStreamingSessionURLInput || (exports.GetDASHStreamingSessionURLInput = {}));
var GetDASHStreamingSessionURLOutput;
(function (GetDASHStreamingSessionURLOutput) {
    /**
     * @internal
     */
    GetDASHStreamingSessionURLOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDASHStreamingSessionURLOutput = exports.GetDASHStreamingSessionURLOutput || (exports.GetDASHStreamingSessionURLOutput = {}));
var ContainerFormat;
(function (ContainerFormat) {
    ContainerFormat["FRAGMENTED_MP4"] = "FRAGMENTED_MP4";
    ContainerFormat["MPEG_TS"] = "MPEG_TS";
})(ContainerFormat = exports.ContainerFormat || (exports.ContainerFormat = {}));
var HLSDiscontinuityMode;
(function (HLSDiscontinuityMode) {
    HLSDiscontinuityMode["ALWAYS"] = "ALWAYS";
    HLSDiscontinuityMode["NEVER"] = "NEVER";
    HLSDiscontinuityMode["ON_DISCONTINUITY"] = "ON_DISCONTINUITY";
})(HLSDiscontinuityMode = exports.HLSDiscontinuityMode || (exports.HLSDiscontinuityMode = {}));
var HLSDisplayFragmentTimestamp;
(function (HLSDisplayFragmentTimestamp) {
    HLSDisplayFragmentTimestamp["ALWAYS"] = "ALWAYS";
    HLSDisplayFragmentTimestamp["NEVER"] = "NEVER";
})(HLSDisplayFragmentTimestamp = exports.HLSDisplayFragmentTimestamp || (exports.HLSDisplayFragmentTimestamp = {}));
var HLSFragmentSelectorType;
(function (HLSFragmentSelectorType) {
    HLSFragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    HLSFragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(HLSFragmentSelectorType = exports.HLSFragmentSelectorType || (exports.HLSFragmentSelectorType = {}));
var HLSTimestampRange;
(function (HLSTimestampRange) {
    /**
     * @internal
     */
    HLSTimestampRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HLSTimestampRange = exports.HLSTimestampRange || (exports.HLSTimestampRange = {}));
var HLSFragmentSelector;
(function (HLSFragmentSelector) {
    /**
     * @internal
     */
    HLSFragmentSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HLSFragmentSelector = exports.HLSFragmentSelector || (exports.HLSFragmentSelector = {}));
var HLSPlaybackMode;
(function (HLSPlaybackMode) {
    HLSPlaybackMode["LIVE"] = "LIVE";
    HLSPlaybackMode["LIVE_REPLAY"] = "LIVE_REPLAY";
    HLSPlaybackMode["ON_DEMAND"] = "ON_DEMAND";
})(HLSPlaybackMode = exports.HLSPlaybackMode || (exports.HLSPlaybackMode = {}));
var GetHLSStreamingSessionURLInput;
(function (GetHLSStreamingSessionURLInput) {
    /**
     * @internal
     */
    GetHLSStreamingSessionURLInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHLSStreamingSessionURLInput = exports.GetHLSStreamingSessionURLInput || (exports.GetHLSStreamingSessionURLInput = {}));
var GetHLSStreamingSessionURLOutput;
(function (GetHLSStreamingSessionURLOutput) {
    /**
     * @internal
     */
    GetHLSStreamingSessionURLOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHLSStreamingSessionURLOutput = exports.GetHLSStreamingSessionURLOutput || (exports.GetHLSStreamingSessionURLOutput = {}));
var GetMediaForFragmentListInput;
(function (GetMediaForFragmentListInput) {
    /**
     * @internal
     */
    GetMediaForFragmentListInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMediaForFragmentListInput = exports.GetMediaForFragmentListInput || (exports.GetMediaForFragmentListInput = {}));
var GetMediaForFragmentListOutput;
(function (GetMediaForFragmentListOutput) {
    /**
     * @internal
     */
    GetMediaForFragmentListOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMediaForFragmentListOutput = exports.GetMediaForFragmentListOutput || (exports.GetMediaForFragmentListOutput = {}));
var FragmentSelectorType;
(function (FragmentSelectorType) {
    FragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    FragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(FragmentSelectorType = exports.FragmentSelectorType || (exports.FragmentSelectorType = {}));
var TimestampRange;
(function (TimestampRange) {
    /**
     * @internal
     */
    TimestampRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestampRange = exports.TimestampRange || (exports.TimestampRange = {}));
var FragmentSelector;
(function (FragmentSelector) {
    /**
     * @internal
     */
    FragmentSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FragmentSelector = exports.FragmentSelector || (exports.FragmentSelector = {}));
var ListFragmentsInput;
(function (ListFragmentsInput) {
    /**
     * @internal
     */
    ListFragmentsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFragmentsInput = exports.ListFragmentsInput || (exports.ListFragmentsInput = {}));
var Fragment;
(function (Fragment) {
    /**
     * @internal
     */
    Fragment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Fragment = exports.Fragment || (exports.Fragment = {}));
var ListFragmentsOutput;
(function (ListFragmentsOutput) {
    /**
     * @internal
     */
    ListFragmentsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFragmentsOutput = exports.ListFragmentsOutput || (exports.ListFragmentsOutput = {}));
//# sourceMappingURL=models_0.js.map