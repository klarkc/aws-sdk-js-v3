"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePresetResponse = exports.DeletePresetRequest = exports.DeletePipelineResponse = exports.DeletePipelineRequest = exports.CreatePresetResponse = exports.Preset = exports.CreatePresetRequest = exports.VideoParameters = exports.PresetWatermark = exports.Thumbnails = exports.CreatePipelineResponse = exports.Warning = exports.Pipeline = exports.CreatePipelineRequest = exports.Notifications = exports.PipelineOutputConfig = exports.Permission = exports.LimitExceededException = exports.CreateJobResponse = exports.Job = exports.Timing = exports.Playlist = exports.JobOutput = exports.CreateJobRequest = exports.CreateJobPlaylist = exports.PlayReadyDrm = exports.HlsContentProtection = exports.CreateJobOutput = exports.JobWatermark = exports.JobAlbumArt = exports.JobInput = exports.InputCaptions = exports.DetectedProperties = exports.Clip = exports.TimeSpan = exports.Captions = exports.CaptionSource = exports.CaptionFormat = exports.ValidationException = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.InternalServiceException = exports.IncompatibleVersionException = exports.CancelJobResponse = exports.CancelJobRequest = exports.AudioParameters = exports.AudioCodecOptions = exports.Artwork = exports.Encryption = exports.AccessDeniedException = void 0;
exports.UpdatePipelineStatusResponse = exports.UpdatePipelineStatusRequest = exports.UpdatePipelineNotificationsResponse = exports.UpdatePipelineNotificationsRequest = exports.UpdatePipelineResponse = exports.UpdatePipelineRequest = exports.TestRoleResponse = exports.TestRoleRequest = exports.ReadPresetResponse = exports.ReadPresetRequest = exports.ReadPipelineResponse = exports.ReadPipelineRequest = exports.ReadJobResponse = exports.ReadJobRequest = exports.ListPresetsResponse = exports.ListPresetsRequest = exports.ListPipelinesResponse = exports.ListPipelinesRequest = exports.ListJobsByStatusResponse = exports.ListJobsByStatusRequest = exports.ListJobsByPipelineResponse = exports.ListJobsByPipelineRequest = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var Encryption;
(function (Encryption) {
    /**
     * @internal
     */
    Encryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Encryption = exports.Encryption || (exports.Encryption = {}));
var Artwork;
(function (Artwork) {
    /**
     * @internal
     */
    Artwork.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Artwork = exports.Artwork || (exports.Artwork = {}));
var AudioCodecOptions;
(function (AudioCodecOptions) {
    /**
     * @internal
     */
    AudioCodecOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioCodecOptions = exports.AudioCodecOptions || (exports.AudioCodecOptions = {}));
var AudioParameters;
(function (AudioParameters) {
    /**
     * @internal
     */
    AudioParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioParameters = exports.AudioParameters || (exports.AudioParameters = {}));
var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {}));
var CancelJobResponse;
(function (CancelJobResponse) {
    /**
     * @internal
     */
    CancelJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobResponse = exports.CancelJobResponse || (exports.CancelJobResponse = {}));
var IncompatibleVersionException;
(function (IncompatibleVersionException) {
    /**
     * @internal
     */
    IncompatibleVersionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatibleVersionException = exports.IncompatibleVersionException || (exports.IncompatibleVersionException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var CaptionFormat;
(function (CaptionFormat) {
    /**
     * @internal
     */
    CaptionFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionFormat = exports.CaptionFormat || (exports.CaptionFormat = {}));
var CaptionSource;
(function (CaptionSource) {
    /**
     * @internal
     */
    CaptionSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionSource = exports.CaptionSource || (exports.CaptionSource = {}));
var Captions;
(function (Captions) {
    /**
     * @internal
     */
    Captions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Captions = exports.Captions || (exports.Captions = {}));
var TimeSpan;
(function (TimeSpan) {
    /**
     * @internal
     */
    TimeSpan.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeSpan = exports.TimeSpan || (exports.TimeSpan = {}));
var Clip;
(function (Clip) {
    /**
     * @internal
     */
    Clip.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Clip = exports.Clip || (exports.Clip = {}));
var DetectedProperties;
(function (DetectedProperties) {
    /**
     * @internal
     */
    DetectedProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectedProperties = exports.DetectedProperties || (exports.DetectedProperties = {}));
var InputCaptions;
(function (InputCaptions) {
    /**
     * @internal
     */
    InputCaptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputCaptions = exports.InputCaptions || (exports.InputCaptions = {}));
var JobInput;
(function (JobInput) {
    /**
     * @internal
     */
    JobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobInput = exports.JobInput || (exports.JobInput = {}));
var JobAlbumArt;
(function (JobAlbumArt) {
    /**
     * @internal
     */
    JobAlbumArt.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobAlbumArt = exports.JobAlbumArt || (exports.JobAlbumArt = {}));
var JobWatermark;
(function (JobWatermark) {
    /**
     * @internal
     */
    JobWatermark.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobWatermark = exports.JobWatermark || (exports.JobWatermark = {}));
var CreateJobOutput;
(function (CreateJobOutput) {
    /**
     * @internal
     */
    CreateJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobOutput = exports.CreateJobOutput || (exports.CreateJobOutput = {}));
var HlsContentProtection;
(function (HlsContentProtection) {
    /**
     * @internal
     */
    HlsContentProtection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsContentProtection = exports.HlsContentProtection || (exports.HlsContentProtection = {}));
var PlayReadyDrm;
(function (PlayReadyDrm) {
    /**
     * @internal
     */
    PlayReadyDrm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlayReadyDrm = exports.PlayReadyDrm || (exports.PlayReadyDrm = {}));
var CreateJobPlaylist;
(function (CreateJobPlaylist) {
    /**
     * @internal
     */
    CreateJobPlaylist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobPlaylist = exports.CreateJobPlaylist || (exports.CreateJobPlaylist = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var JobOutput;
(function (JobOutput) {
    /**
     * @internal
     */
    JobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobOutput = exports.JobOutput || (exports.JobOutput = {}));
var Playlist;
(function (Playlist) {
    /**
     * @internal
     */
    Playlist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Playlist = exports.Playlist || (exports.Playlist = {}));
var Timing;
(function (Timing) {
    /**
     * @internal
     */
    Timing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Timing = exports.Timing || (exports.Timing = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Job = exports.Job || (exports.Job = {}));
var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResponse = exports.CreateJobResponse || (exports.CreateJobResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var Permission;
(function (Permission) {
    /**
     * @internal
     */
    Permission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Permission = exports.Permission || (exports.Permission = {}));
var PipelineOutputConfig;
(function (PipelineOutputConfig) {
    /**
     * @internal
     */
    PipelineOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineOutputConfig = exports.PipelineOutputConfig || (exports.PipelineOutputConfig = {}));
var Notifications;
(function (Notifications) {
    /**
     * @internal
     */
    Notifications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Notifications = exports.Notifications || (exports.Notifications = {}));
var CreatePipelineRequest;
(function (CreatePipelineRequest) {
    /**
     * @internal
     */
    CreatePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineRequest = exports.CreatePipelineRequest || (exports.CreatePipelineRequest = {}));
var Pipeline;
(function (Pipeline) {
    /**
     * @internal
     */
    Pipeline.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Pipeline = exports.Pipeline || (exports.Pipeline = {}));
var Warning;
(function (Warning) {
    /**
     * @internal
     */
    Warning.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Warning = exports.Warning || (exports.Warning = {}));
var CreatePipelineResponse;
(function (CreatePipelineResponse) {
    /**
     * @internal
     */
    CreatePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineResponse = exports.CreatePipelineResponse || (exports.CreatePipelineResponse = {}));
var Thumbnails;
(function (Thumbnails) {
    /**
     * @internal
     */
    Thumbnails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Thumbnails = exports.Thumbnails || (exports.Thumbnails = {}));
var PresetWatermark;
(function (PresetWatermark) {
    /**
     * @internal
     */
    PresetWatermark.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PresetWatermark = exports.PresetWatermark || (exports.PresetWatermark = {}));
var VideoParameters;
(function (VideoParameters) {
    /**
     * @internal
     */
    VideoParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoParameters = exports.VideoParameters || (exports.VideoParameters = {}));
var CreatePresetRequest;
(function (CreatePresetRequest) {
    /**
     * @internal
     */
    CreatePresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresetRequest = exports.CreatePresetRequest || (exports.CreatePresetRequest = {}));
var Preset;
(function (Preset) {
    /**
     * @internal
     */
    Preset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Preset = exports.Preset || (exports.Preset = {}));
var CreatePresetResponse;
(function (CreatePresetResponse) {
    /**
     * @internal
     */
    CreatePresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePresetResponse = exports.CreatePresetResponse || (exports.CreatePresetResponse = {}));
var DeletePipelineRequest;
(function (DeletePipelineRequest) {
    /**
     * @internal
     */
    DeletePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineRequest = exports.DeletePipelineRequest || (exports.DeletePipelineRequest = {}));
var DeletePipelineResponse;
(function (DeletePipelineResponse) {
    /**
     * @internal
     */
    DeletePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineResponse = exports.DeletePipelineResponse || (exports.DeletePipelineResponse = {}));
var DeletePresetRequest;
(function (DeletePresetRequest) {
    /**
     * @internal
     */
    DeletePresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePresetRequest = exports.DeletePresetRequest || (exports.DeletePresetRequest = {}));
var DeletePresetResponse;
(function (DeletePresetResponse) {
    /**
     * @internal
     */
    DeletePresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePresetResponse = exports.DeletePresetResponse || (exports.DeletePresetResponse = {}));
var ListJobsByPipelineRequest;
(function (ListJobsByPipelineRequest) {
    /**
     * @internal
     */
    ListJobsByPipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsByPipelineRequest = exports.ListJobsByPipelineRequest || (exports.ListJobsByPipelineRequest = {}));
var ListJobsByPipelineResponse;
(function (ListJobsByPipelineResponse) {
    /**
     * @internal
     */
    ListJobsByPipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsByPipelineResponse = exports.ListJobsByPipelineResponse || (exports.ListJobsByPipelineResponse = {}));
var ListJobsByStatusRequest;
(function (ListJobsByStatusRequest) {
    /**
     * @internal
     */
    ListJobsByStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsByStatusRequest = exports.ListJobsByStatusRequest || (exports.ListJobsByStatusRequest = {}));
var ListJobsByStatusResponse;
(function (ListJobsByStatusResponse) {
    /**
     * @internal
     */
    ListJobsByStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsByStatusResponse = exports.ListJobsByStatusResponse || (exports.ListJobsByStatusResponse = {}));
var ListPipelinesRequest;
(function (ListPipelinesRequest) {
    /**
     * @internal
     */
    ListPipelinesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesRequest = exports.ListPipelinesRequest || (exports.ListPipelinesRequest = {}));
var ListPipelinesResponse;
(function (ListPipelinesResponse) {
    /**
     * @internal
     */
    ListPipelinesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesResponse = exports.ListPipelinesResponse || (exports.ListPipelinesResponse = {}));
var ListPresetsRequest;
(function (ListPresetsRequest) {
    /**
     * @internal
     */
    ListPresetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPresetsRequest = exports.ListPresetsRequest || (exports.ListPresetsRequest = {}));
var ListPresetsResponse;
(function (ListPresetsResponse) {
    /**
     * @internal
     */
    ListPresetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPresetsResponse = exports.ListPresetsResponse || (exports.ListPresetsResponse = {}));
var ReadJobRequest;
(function (ReadJobRequest) {
    /**
     * @internal
     */
    ReadJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReadJobRequest = exports.ReadJobRequest || (exports.ReadJobRequest = {}));
var ReadJobResponse;
(function (ReadJobResponse) {
    /**
     * @internal
     */
    ReadJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReadJobResponse = exports.ReadJobResponse || (exports.ReadJobResponse = {}));
var ReadPipelineRequest;
(function (ReadPipelineRequest) {
    /**
     * @internal
     */
    ReadPipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReadPipelineRequest = exports.ReadPipelineRequest || (exports.ReadPipelineRequest = {}));
var ReadPipelineResponse;
(function (ReadPipelineResponse) {
    /**
     * @internal
     */
    ReadPipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReadPipelineResponse = exports.ReadPipelineResponse || (exports.ReadPipelineResponse = {}));
var ReadPresetRequest;
(function (ReadPresetRequest) {
    /**
     * @internal
     */
    ReadPresetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReadPresetRequest = exports.ReadPresetRequest || (exports.ReadPresetRequest = {}));
var ReadPresetResponse;
(function (ReadPresetResponse) {
    /**
     * @internal
     */
    ReadPresetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReadPresetResponse = exports.ReadPresetResponse || (exports.ReadPresetResponse = {}));
var TestRoleRequest;
(function (TestRoleRequest) {
    /**
     * @internal
     */
    TestRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestRoleRequest = exports.TestRoleRequest || (exports.TestRoleRequest = {}));
var TestRoleResponse;
(function (TestRoleResponse) {
    /**
     * @internal
     */
    TestRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestRoleResponse = exports.TestRoleResponse || (exports.TestRoleResponse = {}));
var UpdatePipelineRequest;
(function (UpdatePipelineRequest) {
    /**
     * @internal
     */
    UpdatePipelineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineRequest = exports.UpdatePipelineRequest || (exports.UpdatePipelineRequest = {}));
var UpdatePipelineResponse;
(function (UpdatePipelineResponse) {
    /**
     * @internal
     */
    UpdatePipelineResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineResponse = exports.UpdatePipelineResponse || (exports.UpdatePipelineResponse = {}));
var UpdatePipelineNotificationsRequest;
(function (UpdatePipelineNotificationsRequest) {
    /**
     * @internal
     */
    UpdatePipelineNotificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineNotificationsRequest = exports.UpdatePipelineNotificationsRequest || (exports.UpdatePipelineNotificationsRequest = {}));
var UpdatePipelineNotificationsResponse;
(function (UpdatePipelineNotificationsResponse) {
    /**
     * @internal
     */
    UpdatePipelineNotificationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineNotificationsResponse = exports.UpdatePipelineNotificationsResponse || (exports.UpdatePipelineNotificationsResponse = {}));
var UpdatePipelineStatusRequest;
(function (UpdatePipelineStatusRequest) {
    /**
     * @internal
     */
    UpdatePipelineStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineStatusRequest = exports.UpdatePipelineStatusRequest || (exports.UpdatePipelineStatusRequest = {}));
var UpdatePipelineStatusResponse;
(function (UpdatePipelineStatusResponse) {
    /**
     * @internal
     */
    UpdatePipelineStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineStatusResponse = exports.UpdatePipelineStatusResponse || (exports.UpdatePipelineStatusResponse = {}));
//# sourceMappingURL=models_0.js.map