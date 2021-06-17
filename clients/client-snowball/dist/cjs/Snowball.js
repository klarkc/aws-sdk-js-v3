"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snowball = void 0;
const SnowballClient_1 = require("./SnowballClient");
const CancelClusterCommand_1 = require("./commands/CancelClusterCommand");
const CancelJobCommand_1 = require("./commands/CancelJobCommand");
const CreateAddressCommand_1 = require("./commands/CreateAddressCommand");
const CreateClusterCommand_1 = require("./commands/CreateClusterCommand");
const CreateJobCommand_1 = require("./commands/CreateJobCommand");
const CreateLongTermPricingCommand_1 = require("./commands/CreateLongTermPricingCommand");
const CreateReturnShippingLabelCommand_1 = require("./commands/CreateReturnShippingLabelCommand");
const DescribeAddressCommand_1 = require("./commands/DescribeAddressCommand");
const DescribeAddressesCommand_1 = require("./commands/DescribeAddressesCommand");
const DescribeClusterCommand_1 = require("./commands/DescribeClusterCommand");
const DescribeJobCommand_1 = require("./commands/DescribeJobCommand");
const DescribeReturnShippingLabelCommand_1 = require("./commands/DescribeReturnShippingLabelCommand");
const GetJobManifestCommand_1 = require("./commands/GetJobManifestCommand");
const GetJobUnlockCodeCommand_1 = require("./commands/GetJobUnlockCodeCommand");
const GetSnowballUsageCommand_1 = require("./commands/GetSnowballUsageCommand");
const GetSoftwareUpdatesCommand_1 = require("./commands/GetSoftwareUpdatesCommand");
const ListClusterJobsCommand_1 = require("./commands/ListClusterJobsCommand");
const ListClustersCommand_1 = require("./commands/ListClustersCommand");
const ListCompatibleImagesCommand_1 = require("./commands/ListCompatibleImagesCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const ListLongTermPricingCommand_1 = require("./commands/ListLongTermPricingCommand");
const UpdateClusterCommand_1 = require("./commands/UpdateClusterCommand");
const UpdateJobCommand_1 = require("./commands/UpdateJobCommand");
const UpdateJobShipmentStateCommand_1 = require("./commands/UpdateJobShipmentStateCommand");
const UpdateLongTermPricingCommand_1 = require("./commands/UpdateLongTermPricingCommand");
/**
 * <p>AWS Snow Family is a petabyte-scale data transport solution that uses secure devices to
 *       transfer large amounts of data between your on-premises data centers and Amazon Simple Storage
 *       Service (Amazon S3). The Snow commands described here provide access to the same
 *       functionality that is available in the AWS Snow Family Management Console, which enables you to
 *       create and manage jobs for a Snow device. To transfer data locally with a Snow device, you'll
 *       need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or AWS OpsHub for Snow Family. For more
 *       information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 */
class Snowball extends SnowballClient_1.SnowballClient {
    cancelCluster(args, optionsOrCb, cb) {
        const command = new CancelClusterCommand_1.CancelClusterCommand(args);
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
    cancelJob(args, optionsOrCb, cb) {
        const command = new CancelJobCommand_1.CancelJobCommand(args);
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
    createAddress(args, optionsOrCb, cb) {
        const command = new CreateAddressCommand_1.CreateAddressCommand(args);
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
    createCluster(args, optionsOrCb, cb) {
        const command = new CreateClusterCommand_1.CreateClusterCommand(args);
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
    createJob(args, optionsOrCb, cb) {
        const command = new CreateJobCommand_1.CreateJobCommand(args);
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
    createLongTermPricing(args, optionsOrCb, cb) {
        const command = new CreateLongTermPricingCommand_1.CreateLongTermPricingCommand(args);
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
    createReturnShippingLabel(args, optionsOrCb, cb) {
        const command = new CreateReturnShippingLabelCommand_1.CreateReturnShippingLabelCommand(args);
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
    describeAddress(args, optionsOrCb, cb) {
        const command = new DescribeAddressCommand_1.DescribeAddressCommand(args);
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
    describeAddresses(args, optionsOrCb, cb) {
        const command = new DescribeAddressesCommand_1.DescribeAddressesCommand(args);
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
    describeCluster(args, optionsOrCb, cb) {
        const command = new DescribeClusterCommand_1.DescribeClusterCommand(args);
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
    describeReturnShippingLabel(args, optionsOrCb, cb) {
        const command = new DescribeReturnShippingLabelCommand_1.DescribeReturnShippingLabelCommand(args);
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
    getJobManifest(args, optionsOrCb, cb) {
        const command = new GetJobManifestCommand_1.GetJobManifestCommand(args);
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
    getJobUnlockCode(args, optionsOrCb, cb) {
        const command = new GetJobUnlockCodeCommand_1.GetJobUnlockCodeCommand(args);
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
    getSnowballUsage(args, optionsOrCb, cb) {
        const command = new GetSnowballUsageCommand_1.GetSnowballUsageCommand(args);
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
    getSoftwareUpdates(args, optionsOrCb, cb) {
        const command = new GetSoftwareUpdatesCommand_1.GetSoftwareUpdatesCommand(args);
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
    listClusterJobs(args, optionsOrCb, cb) {
        const command = new ListClusterJobsCommand_1.ListClusterJobsCommand(args);
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
    listClusters(args, optionsOrCb, cb) {
        const command = new ListClustersCommand_1.ListClustersCommand(args);
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
    listCompatibleImages(args, optionsOrCb, cb) {
        const command = new ListCompatibleImagesCommand_1.ListCompatibleImagesCommand(args);
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
    listLongTermPricing(args, optionsOrCb, cb) {
        const command = new ListLongTermPricingCommand_1.ListLongTermPricingCommand(args);
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
    updateCluster(args, optionsOrCb, cb) {
        const command = new UpdateClusterCommand_1.UpdateClusterCommand(args);
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
    updateJob(args, optionsOrCb, cb) {
        const command = new UpdateJobCommand_1.UpdateJobCommand(args);
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
    updateJobShipmentState(args, optionsOrCb, cb) {
        const command = new UpdateJobShipmentStateCommand_1.UpdateJobShipmentStateCommand(args);
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
    updateLongTermPricing(args, optionsOrCb, cb) {
        const command = new UpdateLongTermPricingCommand_1.UpdateLongTermPricingCommand(args);
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
exports.Snowball = Snowball;
//# sourceMappingURL=Snowball.js.map