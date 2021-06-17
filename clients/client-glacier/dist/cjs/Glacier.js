"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Glacier = void 0;
const GlacierClient_1 = require("./GlacierClient");
const AbortMultipartUploadCommand_1 = require("./commands/AbortMultipartUploadCommand");
const AbortVaultLockCommand_1 = require("./commands/AbortVaultLockCommand");
const AddTagsToVaultCommand_1 = require("./commands/AddTagsToVaultCommand");
const CompleteMultipartUploadCommand_1 = require("./commands/CompleteMultipartUploadCommand");
const CompleteVaultLockCommand_1 = require("./commands/CompleteVaultLockCommand");
const CreateVaultCommand_1 = require("./commands/CreateVaultCommand");
const DeleteArchiveCommand_1 = require("./commands/DeleteArchiveCommand");
const DeleteVaultAccessPolicyCommand_1 = require("./commands/DeleteVaultAccessPolicyCommand");
const DeleteVaultCommand_1 = require("./commands/DeleteVaultCommand");
const DeleteVaultNotificationsCommand_1 = require("./commands/DeleteVaultNotificationsCommand");
const DescribeJobCommand_1 = require("./commands/DescribeJobCommand");
const DescribeVaultCommand_1 = require("./commands/DescribeVaultCommand");
const GetDataRetrievalPolicyCommand_1 = require("./commands/GetDataRetrievalPolicyCommand");
const GetJobOutputCommand_1 = require("./commands/GetJobOutputCommand");
const GetVaultAccessPolicyCommand_1 = require("./commands/GetVaultAccessPolicyCommand");
const GetVaultLockCommand_1 = require("./commands/GetVaultLockCommand");
const GetVaultNotificationsCommand_1 = require("./commands/GetVaultNotificationsCommand");
const InitiateJobCommand_1 = require("./commands/InitiateJobCommand");
const InitiateMultipartUploadCommand_1 = require("./commands/InitiateMultipartUploadCommand");
const InitiateVaultLockCommand_1 = require("./commands/InitiateVaultLockCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const ListMultipartUploadsCommand_1 = require("./commands/ListMultipartUploadsCommand");
const ListPartsCommand_1 = require("./commands/ListPartsCommand");
const ListProvisionedCapacityCommand_1 = require("./commands/ListProvisionedCapacityCommand");
const ListTagsForVaultCommand_1 = require("./commands/ListTagsForVaultCommand");
const ListVaultsCommand_1 = require("./commands/ListVaultsCommand");
const PurchaseProvisionedCapacityCommand_1 = require("./commands/PurchaseProvisionedCapacityCommand");
const RemoveTagsFromVaultCommand_1 = require("./commands/RemoveTagsFromVaultCommand");
const SetDataRetrievalPolicyCommand_1 = require("./commands/SetDataRetrievalPolicyCommand");
const SetVaultAccessPolicyCommand_1 = require("./commands/SetVaultAccessPolicyCommand");
const SetVaultNotificationsCommand_1 = require("./commands/SetVaultNotificationsCommand");
const UploadArchiveCommand_1 = require("./commands/UploadArchiveCommand");
const UploadMultipartPartCommand_1 = require("./commands/UploadMultipartPartCommand");
/**
 * <p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>
 *
 *          <p>Glacier is an extremely low-cost storage service that provides secure,
 *          durable, and easy-to-use storage for data backup and archival. With Glacier,
 *          customers can store their data cost effectively for months, years, or decades.
 *          Glacier also enables customers to offload the administrative burdens of operating and
 *          scaling storage to AWS, so they don't have to worry about capacity planning, hardware
 *          provisioning, data replication, hardware failure and recovery, or time-consuming hardware
 *          migrations.</p>
 *
 *          <p>Glacier is a great storage choice when low storage cost is paramount and your
 *          data is rarely retrieved. If your
 *          application requires fast or frequent access to your data, consider using Amazon S3. For
 *          more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service
 *             (Amazon S3)</a>.</p>
 *
 *          <p>You can store any kind of data in any format. There is no maximum limit on the total
 *          amount of data you can store in Glacier.</p>
 *
 *          <p>If you are a first-time user of Glacier, we recommend that you begin by
 *          reading the following sections in the <i>Amazon S3 Glacier Developer
 *          Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
 *                   Amazon S3 Glacier</a> - This section of the Developer Guide describes the
 *                underlying data model, the operations it supports, and the AWS SDKs that you can use
 *                to interact with the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
 *                   with Amazon S3 Glacier</a> - The Getting Started section walks you through the
 *                process of creating a vault, uploading archives, creating jobs to download archives,
 *                retrieving the job output, and deleting archives.</p>
 *             </li>
 *          </ul>
 */
class Glacier extends GlacierClient_1.GlacierClient {
    abortMultipartUpload(args, optionsOrCb, cb) {
        const command = new AbortMultipartUploadCommand_1.AbortMultipartUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    abortVaultLock(args, optionsOrCb, cb) {
        const command = new AbortVaultLockCommand_1.AbortVaultLockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addTagsToVault(args, optionsOrCb, cb) {
        const command = new AddTagsToVaultCommand_1.AddTagsToVaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    completeMultipartUpload(args, optionsOrCb, cb) {
        const command = new CompleteMultipartUploadCommand_1.CompleteMultipartUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    completeVaultLock(args, optionsOrCb, cb) {
        const command = new CompleteVaultLockCommand_1.CompleteVaultLockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVault(args, optionsOrCb, cb) {
        const command = new CreateVaultCommand_1.CreateVaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteArchive(args, optionsOrCb, cb) {
        const command = new DeleteArchiveCommand_1.DeleteArchiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVault(args, optionsOrCb, cb) {
        const command = new DeleteVaultCommand_1.DeleteVaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVaultAccessPolicy(args, optionsOrCb, cb) {
        const command = new DeleteVaultAccessPolicyCommand_1.DeleteVaultAccessPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVaultNotifications(args, optionsOrCb, cb) {
        const command = new DeleteVaultNotificationsCommand_1.DeleteVaultNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeJob(args, optionsOrCb, cb) {
        const command = new DescribeJobCommand_1.DescribeJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVault(args, optionsOrCb, cb) {
        const command = new DescribeVaultCommand_1.DescribeVaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDataRetrievalPolicy(args, optionsOrCb, cb) {
        const command = new GetDataRetrievalPolicyCommand_1.GetDataRetrievalPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getJobOutput(args, optionsOrCb, cb) {
        const command = new GetJobOutputCommand_1.GetJobOutputCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getVaultAccessPolicy(args, optionsOrCb, cb) {
        const command = new GetVaultAccessPolicyCommand_1.GetVaultAccessPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getVaultLock(args, optionsOrCb, cb) {
        const command = new GetVaultLockCommand_1.GetVaultLockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getVaultNotifications(args, optionsOrCb, cb) {
        const command = new GetVaultNotificationsCommand_1.GetVaultNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    initiateJob(args, optionsOrCb, cb) {
        const command = new InitiateJobCommand_1.InitiateJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    initiateMultipartUpload(args, optionsOrCb, cb) {
        const command = new InitiateMultipartUploadCommand_1.InitiateMultipartUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    initiateVaultLock(args, optionsOrCb, cb) {
        const command = new InitiateVaultLockCommand_1.InitiateVaultLockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listJobs(args, optionsOrCb, cb) {
        const command = new ListJobsCommand_1.ListJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMultipartUploads(args, optionsOrCb, cb) {
        const command = new ListMultipartUploadsCommand_1.ListMultipartUploadsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listParts(args, optionsOrCb, cb) {
        const command = new ListPartsCommand_1.ListPartsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProvisionedCapacity(args, optionsOrCb, cb) {
        const command = new ListProvisionedCapacityCommand_1.ListProvisionedCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForVault(args, optionsOrCb, cb) {
        const command = new ListTagsForVaultCommand_1.ListTagsForVaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVaults(args, optionsOrCb, cb) {
        const command = new ListVaultsCommand_1.ListVaultsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseProvisionedCapacity(args, optionsOrCb, cb) {
        const command = new PurchaseProvisionedCapacityCommand_1.PurchaseProvisionedCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTagsFromVault(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromVaultCommand_1.RemoveTagsFromVaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setDataRetrievalPolicy(args, optionsOrCb, cb) {
        const command = new SetDataRetrievalPolicyCommand_1.SetDataRetrievalPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setVaultAccessPolicy(args, optionsOrCb, cb) {
        const command = new SetVaultAccessPolicyCommand_1.SetVaultAccessPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setVaultNotifications(args, optionsOrCb, cb) {
        const command = new SetVaultNotificationsCommand_1.SetVaultNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    uploadArchive(args, optionsOrCb, cb) {
        const command = new UploadArchiveCommand_1.UploadArchiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    uploadMultipartPart(args, optionsOrCb, cb) {
        const command = new UploadMultipartPartCommand_1.UploadMultipartPartCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Glacier = Glacier;
//# sourceMappingURL=Glacier.js.map