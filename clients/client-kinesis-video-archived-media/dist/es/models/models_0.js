import { __assign } from "tslib";
export var ClientLimitExceededException;
(function (ClientLimitExceededException) {
    /**
     * @internal
     */
    ClientLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientLimitExceededException || (ClientLimitExceededException = {}));
export var ClipFragmentSelectorType;
(function (ClipFragmentSelectorType) {
    ClipFragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    ClipFragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(ClipFragmentSelectorType || (ClipFragmentSelectorType = {}));
export var ClipTimestampRange;
(function (ClipTimestampRange) {
    /**
     * @internal
     */
    ClipTimestampRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClipTimestampRange || (ClipTimestampRange = {}));
export var ClipFragmentSelector;
(function (ClipFragmentSelector) {
    /**
     * @internal
     */
    ClipFragmentSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClipFragmentSelector || (ClipFragmentSelector = {}));
export var GetClipInput;
(function (GetClipInput) {
    /**
     * @internal
     */
    GetClipInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetClipInput || (GetClipInput = {}));
export var GetClipOutput;
(function (GetClipOutput) {
    /**
     * @internal
     */
    GetClipOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetClipOutput || (GetClipOutput = {}));
export var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArgumentException || (InvalidArgumentException = {}));
export var InvalidCodecPrivateDataException;
(function (InvalidCodecPrivateDataException) {
    /**
     * @internal
     */
    InvalidCodecPrivateDataException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCodecPrivateDataException || (InvalidCodecPrivateDataException = {}));
export var InvalidMediaFrameException;
(function (InvalidMediaFrameException) {
    /**
     * @internal
     */
    InvalidMediaFrameException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidMediaFrameException || (InvalidMediaFrameException = {}));
export var MissingCodecPrivateDataException;
(function (MissingCodecPrivateDataException) {
    /**
     * @internal
     */
    MissingCodecPrivateDataException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MissingCodecPrivateDataException || (MissingCodecPrivateDataException = {}));
export var NoDataRetentionException;
(function (NoDataRetentionException) {
    /**
     * @internal
     */
    NoDataRetentionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoDataRetentionException || (NoDataRetentionException = {}));
export var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotAuthorizedException || (NotAuthorizedException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var UnsupportedStreamMediaTypeException;
(function (UnsupportedStreamMediaTypeException) {
    /**
     * @internal
     */
    UnsupportedStreamMediaTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedStreamMediaTypeException || (UnsupportedStreamMediaTypeException = {}));
export var DASHFragmentSelectorType;
(function (DASHFragmentSelectorType) {
    DASHFragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    DASHFragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(DASHFragmentSelectorType || (DASHFragmentSelectorType = {}));
export var DASHTimestampRange;
(function (DASHTimestampRange) {
    /**
     * @internal
     */
    DASHTimestampRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DASHTimestampRange || (DASHTimestampRange = {}));
export var DASHFragmentSelector;
(function (DASHFragmentSelector) {
    /**
     * @internal
     */
    DASHFragmentSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DASHFragmentSelector || (DASHFragmentSelector = {}));
export var DASHDisplayFragmentNumber;
(function (DASHDisplayFragmentNumber) {
    DASHDisplayFragmentNumber["ALWAYS"] = "ALWAYS";
    DASHDisplayFragmentNumber["NEVER"] = "NEVER";
})(DASHDisplayFragmentNumber || (DASHDisplayFragmentNumber = {}));
export var DASHDisplayFragmentTimestamp;
(function (DASHDisplayFragmentTimestamp) {
    DASHDisplayFragmentTimestamp["ALWAYS"] = "ALWAYS";
    DASHDisplayFragmentTimestamp["NEVER"] = "NEVER";
})(DASHDisplayFragmentTimestamp || (DASHDisplayFragmentTimestamp = {}));
export var DASHPlaybackMode;
(function (DASHPlaybackMode) {
    DASHPlaybackMode["LIVE"] = "LIVE";
    DASHPlaybackMode["LIVE_REPLAY"] = "LIVE_REPLAY";
    DASHPlaybackMode["ON_DEMAND"] = "ON_DEMAND";
})(DASHPlaybackMode || (DASHPlaybackMode = {}));
export var GetDASHStreamingSessionURLInput;
(function (GetDASHStreamingSessionURLInput) {
    /**
     * @internal
     */
    GetDASHStreamingSessionURLInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDASHStreamingSessionURLInput || (GetDASHStreamingSessionURLInput = {}));
export var GetDASHStreamingSessionURLOutput;
(function (GetDASHStreamingSessionURLOutput) {
    /**
     * @internal
     */
    GetDASHStreamingSessionURLOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDASHStreamingSessionURLOutput || (GetDASHStreamingSessionURLOutput = {}));
export var ContainerFormat;
(function (ContainerFormat) {
    ContainerFormat["FRAGMENTED_MP4"] = "FRAGMENTED_MP4";
    ContainerFormat["MPEG_TS"] = "MPEG_TS";
})(ContainerFormat || (ContainerFormat = {}));
export var HLSDiscontinuityMode;
(function (HLSDiscontinuityMode) {
    HLSDiscontinuityMode["ALWAYS"] = "ALWAYS";
    HLSDiscontinuityMode["NEVER"] = "NEVER";
    HLSDiscontinuityMode["ON_DISCONTINUITY"] = "ON_DISCONTINUITY";
})(HLSDiscontinuityMode || (HLSDiscontinuityMode = {}));
export var HLSDisplayFragmentTimestamp;
(function (HLSDisplayFragmentTimestamp) {
    HLSDisplayFragmentTimestamp["ALWAYS"] = "ALWAYS";
    HLSDisplayFragmentTimestamp["NEVER"] = "NEVER";
})(HLSDisplayFragmentTimestamp || (HLSDisplayFragmentTimestamp = {}));
export var HLSFragmentSelectorType;
(function (HLSFragmentSelectorType) {
    HLSFragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    HLSFragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(HLSFragmentSelectorType || (HLSFragmentSelectorType = {}));
export var HLSTimestampRange;
(function (HLSTimestampRange) {
    /**
     * @internal
     */
    HLSTimestampRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HLSTimestampRange || (HLSTimestampRange = {}));
export var HLSFragmentSelector;
(function (HLSFragmentSelector) {
    /**
     * @internal
     */
    HLSFragmentSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HLSFragmentSelector || (HLSFragmentSelector = {}));
export var HLSPlaybackMode;
(function (HLSPlaybackMode) {
    HLSPlaybackMode["LIVE"] = "LIVE";
    HLSPlaybackMode["LIVE_REPLAY"] = "LIVE_REPLAY";
    HLSPlaybackMode["ON_DEMAND"] = "ON_DEMAND";
})(HLSPlaybackMode || (HLSPlaybackMode = {}));
export var GetHLSStreamingSessionURLInput;
(function (GetHLSStreamingSessionURLInput) {
    /**
     * @internal
     */
    GetHLSStreamingSessionURLInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetHLSStreamingSessionURLInput || (GetHLSStreamingSessionURLInput = {}));
export var GetHLSStreamingSessionURLOutput;
(function (GetHLSStreamingSessionURLOutput) {
    /**
     * @internal
     */
    GetHLSStreamingSessionURLOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetHLSStreamingSessionURLOutput || (GetHLSStreamingSessionURLOutput = {}));
export var GetMediaForFragmentListInput;
(function (GetMediaForFragmentListInput) {
    /**
     * @internal
     */
    GetMediaForFragmentListInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMediaForFragmentListInput || (GetMediaForFragmentListInput = {}));
export var GetMediaForFragmentListOutput;
(function (GetMediaForFragmentListOutput) {
    /**
     * @internal
     */
    GetMediaForFragmentListOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMediaForFragmentListOutput || (GetMediaForFragmentListOutput = {}));
export var FragmentSelectorType;
(function (FragmentSelectorType) {
    FragmentSelectorType["PRODUCER_TIMESTAMP"] = "PRODUCER_TIMESTAMP";
    FragmentSelectorType["SERVER_TIMESTAMP"] = "SERVER_TIMESTAMP";
})(FragmentSelectorType || (FragmentSelectorType = {}));
export var TimestampRange;
(function (TimestampRange) {
    /**
     * @internal
     */
    TimestampRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestampRange || (TimestampRange = {}));
export var FragmentSelector;
(function (FragmentSelector) {
    /**
     * @internal
     */
    FragmentSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FragmentSelector || (FragmentSelector = {}));
export var ListFragmentsInput;
(function (ListFragmentsInput) {
    /**
     * @internal
     */
    ListFragmentsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFragmentsInput || (ListFragmentsInput = {}));
export var Fragment;
(function (Fragment) {
    /**
     * @internal
     */
    Fragment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Fragment || (Fragment = {}));
export var ListFragmentsOutput;
(function (ListFragmentsOutput) {
    /**
     * @internal
     */
    ListFragmentsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFragmentsOutput || (ListFragmentsOutput = {}));
//# sourceMappingURL=models_0.js.map