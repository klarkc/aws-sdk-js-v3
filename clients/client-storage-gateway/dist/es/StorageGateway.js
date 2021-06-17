import { __extends } from "tslib";
import { StorageGatewayClient } from "./StorageGatewayClient";
import { ActivateGatewayCommand, } from "./commands/ActivateGatewayCommand";
import { AddCacheCommand } from "./commands/AddCacheCommand";
import { AddTagsToResourceCommand, } from "./commands/AddTagsToResourceCommand";
import { AddUploadBufferCommand, } from "./commands/AddUploadBufferCommand";
import { AddWorkingStorageCommand, } from "./commands/AddWorkingStorageCommand";
import { AssignTapePoolCommand, } from "./commands/AssignTapePoolCommand";
import { AssociateFileSystemCommand, } from "./commands/AssociateFileSystemCommand";
import { AttachVolumeCommand, } from "./commands/AttachVolumeCommand";
import { CancelArchivalCommand, } from "./commands/CancelArchivalCommand";
import { CancelRetrievalCommand, } from "./commands/CancelRetrievalCommand";
import { CreateCachediSCSIVolumeCommand, } from "./commands/CreateCachediSCSIVolumeCommand";
import { CreateNFSFileShareCommand, } from "./commands/CreateNFSFileShareCommand";
import { CreateSMBFileShareCommand, } from "./commands/CreateSMBFileShareCommand";
import { CreateSnapshotCommand, } from "./commands/CreateSnapshotCommand";
import { CreateSnapshotFromVolumeRecoveryPointCommand, } from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import { CreateStorediSCSIVolumeCommand, } from "./commands/CreateStorediSCSIVolumeCommand";
import { CreateTapePoolCommand, } from "./commands/CreateTapePoolCommand";
import { CreateTapeWithBarcodeCommand, } from "./commands/CreateTapeWithBarcodeCommand";
import { CreateTapesCommand } from "./commands/CreateTapesCommand";
import { DeleteAutomaticTapeCreationPolicyCommand, } from "./commands/DeleteAutomaticTapeCreationPolicyCommand";
import { DeleteBandwidthRateLimitCommand, } from "./commands/DeleteBandwidthRateLimitCommand";
import { DeleteChapCredentialsCommand, } from "./commands/DeleteChapCredentialsCommand";
import { DeleteFileShareCommand, } from "./commands/DeleteFileShareCommand";
import { DeleteGatewayCommand, } from "./commands/DeleteGatewayCommand";
import { DeleteSnapshotScheduleCommand, } from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTapeArchiveCommand, } from "./commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommand } from "./commands/DeleteTapeCommand";
import { DeleteTapePoolCommand, } from "./commands/DeleteTapePoolCommand";
import { DeleteVolumeCommand, } from "./commands/DeleteVolumeCommand";
import { DescribeAvailabilityMonitorTestCommand, } from "./commands/DescribeAvailabilityMonitorTestCommand";
import { DescribeBandwidthRateLimitCommand, } from "./commands/DescribeBandwidthRateLimitCommand";
import { DescribeBandwidthRateLimitScheduleCommand, } from "./commands/DescribeBandwidthRateLimitScheduleCommand";
import { DescribeCacheCommand, } from "./commands/DescribeCacheCommand";
import { DescribeCachediSCSIVolumesCommand, } from "./commands/DescribeCachediSCSIVolumesCommand";
import { DescribeChapCredentialsCommand, } from "./commands/DescribeChapCredentialsCommand";
import { DescribeFileSystemAssociationsCommand, } from "./commands/DescribeFileSystemAssociationsCommand";
import { DescribeGatewayInformationCommand, } from "./commands/DescribeGatewayInformationCommand";
import { DescribeMaintenanceStartTimeCommand, } from "./commands/DescribeMaintenanceStartTimeCommand";
import { DescribeNFSFileSharesCommand, } from "./commands/DescribeNFSFileSharesCommand";
import { DescribeSMBFileSharesCommand, } from "./commands/DescribeSMBFileSharesCommand";
import { DescribeSMBSettingsCommand, } from "./commands/DescribeSMBSettingsCommand";
import { DescribeSnapshotScheduleCommand, } from "./commands/DescribeSnapshotScheduleCommand";
import { DescribeStorediSCSIVolumesCommand, } from "./commands/DescribeStorediSCSIVolumesCommand";
import { DescribeTapeArchivesCommand, } from "./commands/DescribeTapeArchivesCommand";
import { DescribeTapeRecoveryPointsCommand, } from "./commands/DescribeTapeRecoveryPointsCommand";
import { DescribeTapesCommand, } from "./commands/DescribeTapesCommand";
import { DescribeUploadBufferCommand, } from "./commands/DescribeUploadBufferCommand";
import { DescribeVTLDevicesCommand, } from "./commands/DescribeVTLDevicesCommand";
import { DescribeWorkingStorageCommand, } from "./commands/DescribeWorkingStorageCommand";
import { DetachVolumeCommand, } from "./commands/DetachVolumeCommand";
import { DisableGatewayCommand, } from "./commands/DisableGatewayCommand";
import { DisassociateFileSystemCommand, } from "./commands/DisassociateFileSystemCommand";
import { JoinDomainCommand } from "./commands/JoinDomainCommand";
import { ListAutomaticTapeCreationPoliciesCommand, } from "./commands/ListAutomaticTapeCreationPoliciesCommand";
import { ListFileSharesCommand, } from "./commands/ListFileSharesCommand";
import { ListFileSystemAssociationsCommand, } from "./commands/ListFileSystemAssociationsCommand";
import { ListGatewaysCommand, } from "./commands/ListGatewaysCommand";
import { ListLocalDisksCommand, } from "./commands/ListLocalDisksCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTapePoolsCommand, } from "./commands/ListTapePoolsCommand";
import { ListTapesCommand } from "./commands/ListTapesCommand";
import { ListVolumeInitiatorsCommand, } from "./commands/ListVolumeInitiatorsCommand";
import { ListVolumeRecoveryPointsCommand, } from "./commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommand } from "./commands/ListVolumesCommand";
import { NotifyWhenUploadedCommand, } from "./commands/NotifyWhenUploadedCommand";
import { RefreshCacheCommand, } from "./commands/RefreshCacheCommand";
import { RemoveTagsFromResourceCommand, } from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommand } from "./commands/ResetCacheCommand";
import { RetrieveTapeArchiveCommand, } from "./commands/RetrieveTapeArchiveCommand";
import { RetrieveTapeRecoveryPointCommand, } from "./commands/RetrieveTapeRecoveryPointCommand";
import { SetLocalConsolePasswordCommand, } from "./commands/SetLocalConsolePasswordCommand";
import { SetSMBGuestPasswordCommand, } from "./commands/SetSMBGuestPasswordCommand";
import { ShutdownGatewayCommand, } from "./commands/ShutdownGatewayCommand";
import { StartAvailabilityMonitorTestCommand, } from "./commands/StartAvailabilityMonitorTestCommand";
import { StartGatewayCommand, } from "./commands/StartGatewayCommand";
import { UpdateAutomaticTapeCreationPolicyCommand, } from "./commands/UpdateAutomaticTapeCreationPolicyCommand";
import { UpdateBandwidthRateLimitCommand, } from "./commands/UpdateBandwidthRateLimitCommand";
import { UpdateBandwidthRateLimitScheduleCommand, } from "./commands/UpdateBandwidthRateLimitScheduleCommand";
import { UpdateChapCredentialsCommand, } from "./commands/UpdateChapCredentialsCommand";
import { UpdateFileSystemAssociationCommand, } from "./commands/UpdateFileSystemAssociationCommand";
import { UpdateGatewayInformationCommand, } from "./commands/UpdateGatewayInformationCommand";
import { UpdateGatewaySoftwareNowCommand, } from "./commands/UpdateGatewaySoftwareNowCommand";
import { UpdateMaintenanceStartTimeCommand, } from "./commands/UpdateMaintenanceStartTimeCommand";
import { UpdateNFSFileShareCommand, } from "./commands/UpdateNFSFileShareCommand";
import { UpdateSMBFileShareCommand, } from "./commands/UpdateSMBFileShareCommand";
import { UpdateSMBFileShareVisibilityCommand, } from "./commands/UpdateSMBFileShareVisibilityCommand";
import { UpdateSMBSecurityStrategyCommand, } from "./commands/UpdateSMBSecurityStrategyCommand";
import { UpdateSnapshotScheduleCommand, } from "./commands/UpdateSnapshotScheduleCommand";
import { UpdateVTLDeviceTypeCommand, } from "./commands/UpdateVTLDeviceTypeCommand";
/**
 * <fullname>AWS Storage Gateway Service</fullname>
 *
 *          <p>AWS Storage Gateway is the service that connects an on-premises software appliance with
 *          cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the AWS storage infrastructure. The
 *          service enables you to securely upload data to the AWS Cloud for cost effective backup and
 *          rapid disaster recovery.</p>
 *
 *          <p>Use the following links to get started using the <i>AWS Storage Gateway Service
 *             API Reference</i>:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway required request headers</a>: Describes the required
 *                headers that you must send with every POST request to AWS Storage Gateway.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: AWS Storage Gateway requires that you authenticate
 *                every request you send; this topic describes how sign such a request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about AWS Storage Gateway
 *                errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS
 *                   Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway
 *                operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">AWS Storage Gateway
 *                   endpoints and quotas</a>: Provides a list of each AWS Region and the endpoints
 *                available for use with AWS Storage Gateway.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your
 *             resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the
 *             ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with
 *             the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the
 *             EC2 API might not behave as expected.</p>
 *          </note>
 *
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes
 *             are changing to a longer format. Starting in December 2016, all new volumes and
 *             snapshots will be created with a 17-character string. Starting in April 2016, you will
 *             be able to use these longer IDs so you can test your systems with the new format. For
 *             more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and
 *                EBS resource IDs</a>.</p>
 *
 *             <p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
 *             looks like the following:</p>
 *
 *             <p>
 *                <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
 *
 *             <p>A snapshot ID with the longer ID format looks like the following:
 *                <code>snap-78e226633445566ee</code>.</p>
 *
 *             <p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement:
 *                Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in
 *             2016</a>.</p>
 *          </important>
 */
var StorageGateway = /** @class */ (function (_super) {
    __extends(StorageGateway, _super);
    function StorageGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageGateway.prototype.activateGateway = function (args, optionsOrCb, cb) {
        var command = new ActivateGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.addCache = function (args, optionsOrCb, cb) {
        var command = new AddCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.addTagsToResource = function (args, optionsOrCb, cb) {
        var command = new AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.addUploadBuffer = function (args, optionsOrCb, cb) {
        var command = new AddUploadBufferCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.addWorkingStorage = function (args, optionsOrCb, cb) {
        var command = new AddWorkingStorageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.assignTapePool = function (args, optionsOrCb, cb) {
        var command = new AssignTapePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.associateFileSystem = function (args, optionsOrCb, cb) {
        var command = new AssociateFileSystemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.attachVolume = function (args, optionsOrCb, cb) {
        var command = new AttachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.cancelArchival = function (args, optionsOrCb, cb) {
        var command = new CancelArchivalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.cancelRetrieval = function (args, optionsOrCb, cb) {
        var command = new CancelRetrievalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createCachediSCSIVolume = function (args, optionsOrCb, cb) {
        var command = new CreateCachediSCSIVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createNFSFileShare = function (args, optionsOrCb, cb) {
        var command = new CreateNFSFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createSMBFileShare = function (args, optionsOrCb, cb) {
        var command = new CreateSMBFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createSnapshot = function (args, optionsOrCb, cb) {
        var command = new CreateSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createSnapshotFromVolumeRecoveryPoint = function (args, optionsOrCb, cb) {
        var command = new CreateSnapshotFromVolumeRecoveryPointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createStorediSCSIVolume = function (args, optionsOrCb, cb) {
        var command = new CreateStorediSCSIVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createTapePool = function (args, optionsOrCb, cb) {
        var command = new CreateTapePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createTapes = function (args, optionsOrCb, cb) {
        var command = new CreateTapesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.createTapeWithBarcode = function (args, optionsOrCb, cb) {
        var command = new CreateTapeWithBarcodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteAutomaticTapeCreationPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteAutomaticTapeCreationPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteBandwidthRateLimit = function (args, optionsOrCb, cb) {
        var command = new DeleteBandwidthRateLimitCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteChapCredentials = function (args, optionsOrCb, cb) {
        var command = new DeleteChapCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteFileShare = function (args, optionsOrCb, cb) {
        var command = new DeleteFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteSnapshotSchedule = function (args, optionsOrCb, cb) {
        var command = new DeleteSnapshotScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteTape = function (args, optionsOrCb, cb) {
        var command = new DeleteTapeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteTapeArchive = function (args, optionsOrCb, cb) {
        var command = new DeleteTapeArchiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteTapePool = function (args, optionsOrCb, cb) {
        var command = new DeleteTapePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.deleteVolume = function (args, optionsOrCb, cb) {
        var command = new DeleteVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeAvailabilityMonitorTest = function (args, optionsOrCb, cb) {
        var command = new DescribeAvailabilityMonitorTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeBandwidthRateLimit = function (args, optionsOrCb, cb) {
        var command = new DescribeBandwidthRateLimitCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeBandwidthRateLimitSchedule = function (args, optionsOrCb, cb) {
        var command = new DescribeBandwidthRateLimitScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeCache = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeCachediSCSIVolumes = function (args, optionsOrCb, cb) {
        var command = new DescribeCachediSCSIVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeChapCredentials = function (args, optionsOrCb, cb) {
        var command = new DescribeChapCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeFileSystemAssociations = function (args, optionsOrCb, cb) {
        var command = new DescribeFileSystemAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeGatewayInformation = function (args, optionsOrCb, cb) {
        var command = new DescribeGatewayInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeMaintenanceStartTime = function (args, optionsOrCb, cb) {
        var command = new DescribeMaintenanceStartTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeNFSFileShares = function (args, optionsOrCb, cb) {
        var command = new DescribeNFSFileSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeSMBFileShares = function (args, optionsOrCb, cb) {
        var command = new DescribeSMBFileSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeSMBSettings = function (args, optionsOrCb, cb) {
        var command = new DescribeSMBSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeSnapshotSchedule = function (args, optionsOrCb, cb) {
        var command = new DescribeSnapshotScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeStorediSCSIVolumes = function (args, optionsOrCb, cb) {
        var command = new DescribeStorediSCSIVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeTapeArchives = function (args, optionsOrCb, cb) {
        var command = new DescribeTapeArchivesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeTapeRecoveryPoints = function (args, optionsOrCb, cb) {
        var command = new DescribeTapeRecoveryPointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeTapes = function (args, optionsOrCb, cb) {
        var command = new DescribeTapesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeUploadBuffer = function (args, optionsOrCb, cb) {
        var command = new DescribeUploadBufferCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeVTLDevices = function (args, optionsOrCb, cb) {
        var command = new DescribeVTLDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.describeWorkingStorage = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkingStorageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.detachVolume = function (args, optionsOrCb, cb) {
        var command = new DetachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.disableGateway = function (args, optionsOrCb, cb) {
        var command = new DisableGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.disassociateFileSystem = function (args, optionsOrCb, cb) {
        var command = new DisassociateFileSystemCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.joinDomain = function (args, optionsOrCb, cb) {
        var command = new JoinDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listAutomaticTapeCreationPolicies = function (args, optionsOrCb, cb) {
        var command = new ListAutomaticTapeCreationPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listFileShares = function (args, optionsOrCb, cb) {
        var command = new ListFileSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listFileSystemAssociations = function (args, optionsOrCb, cb) {
        var command = new ListFileSystemAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listGateways = function (args, optionsOrCb, cb) {
        var command = new ListGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listLocalDisks = function (args, optionsOrCb, cb) {
        var command = new ListLocalDisksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listTapePools = function (args, optionsOrCb, cb) {
        var command = new ListTapePoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listTapes = function (args, optionsOrCb, cb) {
        var command = new ListTapesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listVolumeInitiators = function (args, optionsOrCb, cb) {
        var command = new ListVolumeInitiatorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listVolumeRecoveryPoints = function (args, optionsOrCb, cb) {
        var command = new ListVolumeRecoveryPointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.listVolumes = function (args, optionsOrCb, cb) {
        var command = new ListVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.notifyWhenUploaded = function (args, optionsOrCb, cb) {
        var command = new NotifyWhenUploadedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.refreshCache = function (args, optionsOrCb, cb) {
        var command = new RefreshCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.removeTagsFromResource = function (args, optionsOrCb, cb) {
        var command = new RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.resetCache = function (args, optionsOrCb, cb) {
        var command = new ResetCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.retrieveTapeArchive = function (args, optionsOrCb, cb) {
        var command = new RetrieveTapeArchiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.retrieveTapeRecoveryPoint = function (args, optionsOrCb, cb) {
        var command = new RetrieveTapeRecoveryPointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.setLocalConsolePassword = function (args, optionsOrCb, cb) {
        var command = new SetLocalConsolePasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.setSMBGuestPassword = function (args, optionsOrCb, cb) {
        var command = new SetSMBGuestPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.shutdownGateway = function (args, optionsOrCb, cb) {
        var command = new ShutdownGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.startAvailabilityMonitorTest = function (args, optionsOrCb, cb) {
        var command = new StartAvailabilityMonitorTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.startGateway = function (args, optionsOrCb, cb) {
        var command = new StartGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateAutomaticTapeCreationPolicy = function (args, optionsOrCb, cb) {
        var command = new UpdateAutomaticTapeCreationPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateBandwidthRateLimit = function (args, optionsOrCb, cb) {
        var command = new UpdateBandwidthRateLimitCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateBandwidthRateLimitSchedule = function (args, optionsOrCb, cb) {
        var command = new UpdateBandwidthRateLimitScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateChapCredentials = function (args, optionsOrCb, cb) {
        var command = new UpdateChapCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateFileSystemAssociation = function (args, optionsOrCb, cb) {
        var command = new UpdateFileSystemAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateGatewayInformation = function (args, optionsOrCb, cb) {
        var command = new UpdateGatewayInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateGatewaySoftwareNow = function (args, optionsOrCb, cb) {
        var command = new UpdateGatewaySoftwareNowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateMaintenanceStartTime = function (args, optionsOrCb, cb) {
        var command = new UpdateMaintenanceStartTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateNFSFileShare = function (args, optionsOrCb, cb) {
        var command = new UpdateNFSFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateSMBFileShare = function (args, optionsOrCb, cb) {
        var command = new UpdateSMBFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateSMBFileShareVisibility = function (args, optionsOrCb, cb) {
        var command = new UpdateSMBFileShareVisibilityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateSMBSecurityStrategy = function (args, optionsOrCb, cb) {
        var command = new UpdateSMBSecurityStrategyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateSnapshotSchedule = function (args, optionsOrCb, cb) {
        var command = new UpdateSnapshotScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    StorageGateway.prototype.updateVTLDeviceType = function (args, optionsOrCb, cb) {
        var command = new UpdateVTLDeviceTypeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return StorageGateway;
}(StorageGatewayClient));
export { StorageGateway };
//# sourceMappingURL=StorageGateway.js.map