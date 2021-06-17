"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaLive = void 0;
const MediaLiveClient_1 = require("./MediaLiveClient");
const AcceptInputDeviceTransferCommand_1 = require("./commands/AcceptInputDeviceTransferCommand");
const BatchDeleteCommand_1 = require("./commands/BatchDeleteCommand");
const BatchStartCommand_1 = require("./commands/BatchStartCommand");
const BatchStopCommand_1 = require("./commands/BatchStopCommand");
const BatchUpdateScheduleCommand_1 = require("./commands/BatchUpdateScheduleCommand");
const CancelInputDeviceTransferCommand_1 = require("./commands/CancelInputDeviceTransferCommand");
const CreateChannelCommand_1 = require("./commands/CreateChannelCommand");
const CreateInputCommand_1 = require("./commands/CreateInputCommand");
const CreateInputSecurityGroupCommand_1 = require("./commands/CreateInputSecurityGroupCommand");
const CreateMultiplexCommand_1 = require("./commands/CreateMultiplexCommand");
const CreateMultiplexProgramCommand_1 = require("./commands/CreateMultiplexProgramCommand");
const CreatePartnerInputCommand_1 = require("./commands/CreatePartnerInputCommand");
const CreateTagsCommand_1 = require("./commands/CreateTagsCommand");
const DeleteChannelCommand_1 = require("./commands/DeleteChannelCommand");
const DeleteInputCommand_1 = require("./commands/DeleteInputCommand");
const DeleteInputSecurityGroupCommand_1 = require("./commands/DeleteInputSecurityGroupCommand");
const DeleteMultiplexCommand_1 = require("./commands/DeleteMultiplexCommand");
const DeleteMultiplexProgramCommand_1 = require("./commands/DeleteMultiplexProgramCommand");
const DeleteReservationCommand_1 = require("./commands/DeleteReservationCommand");
const DeleteScheduleCommand_1 = require("./commands/DeleteScheduleCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DescribeChannelCommand_1 = require("./commands/DescribeChannelCommand");
const DescribeInputCommand_1 = require("./commands/DescribeInputCommand");
const DescribeInputDeviceCommand_1 = require("./commands/DescribeInputDeviceCommand");
const DescribeInputDeviceThumbnailCommand_1 = require("./commands/DescribeInputDeviceThumbnailCommand");
const DescribeInputSecurityGroupCommand_1 = require("./commands/DescribeInputSecurityGroupCommand");
const DescribeMultiplexCommand_1 = require("./commands/DescribeMultiplexCommand");
const DescribeMultiplexProgramCommand_1 = require("./commands/DescribeMultiplexProgramCommand");
const DescribeOfferingCommand_1 = require("./commands/DescribeOfferingCommand");
const DescribeReservationCommand_1 = require("./commands/DescribeReservationCommand");
const DescribeScheduleCommand_1 = require("./commands/DescribeScheduleCommand");
const ListChannelsCommand_1 = require("./commands/ListChannelsCommand");
const ListInputDeviceTransfersCommand_1 = require("./commands/ListInputDeviceTransfersCommand");
const ListInputDevicesCommand_1 = require("./commands/ListInputDevicesCommand");
const ListInputSecurityGroupsCommand_1 = require("./commands/ListInputSecurityGroupsCommand");
const ListInputsCommand_1 = require("./commands/ListInputsCommand");
const ListMultiplexProgramsCommand_1 = require("./commands/ListMultiplexProgramsCommand");
const ListMultiplexesCommand_1 = require("./commands/ListMultiplexesCommand");
const ListOfferingsCommand_1 = require("./commands/ListOfferingsCommand");
const ListReservationsCommand_1 = require("./commands/ListReservationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PurchaseOfferingCommand_1 = require("./commands/PurchaseOfferingCommand");
const RejectInputDeviceTransferCommand_1 = require("./commands/RejectInputDeviceTransferCommand");
const StartChannelCommand_1 = require("./commands/StartChannelCommand");
const StartMultiplexCommand_1 = require("./commands/StartMultiplexCommand");
const StopChannelCommand_1 = require("./commands/StopChannelCommand");
const StopMultiplexCommand_1 = require("./commands/StopMultiplexCommand");
const TransferInputDeviceCommand_1 = require("./commands/TransferInputDeviceCommand");
const UpdateChannelClassCommand_1 = require("./commands/UpdateChannelClassCommand");
const UpdateChannelCommand_1 = require("./commands/UpdateChannelCommand");
const UpdateInputCommand_1 = require("./commands/UpdateInputCommand");
const UpdateInputDeviceCommand_1 = require("./commands/UpdateInputDeviceCommand");
const UpdateInputSecurityGroupCommand_1 = require("./commands/UpdateInputSecurityGroupCommand");
const UpdateMultiplexCommand_1 = require("./commands/UpdateMultiplexCommand");
const UpdateMultiplexProgramCommand_1 = require("./commands/UpdateMultiplexProgramCommand");
const UpdateReservationCommand_1 = require("./commands/UpdateReservationCommand");
/**
 * API for AWS Elemental MediaLive
 */
class MediaLive extends MediaLiveClient_1.MediaLiveClient {
    acceptInputDeviceTransfer(args, optionsOrCb, cb) {
        const command = new AcceptInputDeviceTransferCommand_1.AcceptInputDeviceTransferCommand(args);
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
    batchDelete(args, optionsOrCb, cb) {
        const command = new BatchDeleteCommand_1.BatchDeleteCommand(args);
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
    batchStart(args, optionsOrCb, cb) {
        const command = new BatchStartCommand_1.BatchStartCommand(args);
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
    batchStop(args, optionsOrCb, cb) {
        const command = new BatchStopCommand_1.BatchStopCommand(args);
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
    batchUpdateSchedule(args, optionsOrCb, cb) {
        const command = new BatchUpdateScheduleCommand_1.BatchUpdateScheduleCommand(args);
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
    cancelInputDeviceTransfer(args, optionsOrCb, cb) {
        const command = new CancelInputDeviceTransferCommand_1.CancelInputDeviceTransferCommand(args);
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
    createChannel(args, optionsOrCb, cb) {
        const command = new CreateChannelCommand_1.CreateChannelCommand(args);
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
    createInput(args, optionsOrCb, cb) {
        const command = new CreateInputCommand_1.CreateInputCommand(args);
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
    createInputSecurityGroup(args, optionsOrCb, cb) {
        const command = new CreateInputSecurityGroupCommand_1.CreateInputSecurityGroupCommand(args);
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
    createMultiplex(args, optionsOrCb, cb) {
        const command = new CreateMultiplexCommand_1.CreateMultiplexCommand(args);
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
    createMultiplexProgram(args, optionsOrCb, cb) {
        const command = new CreateMultiplexProgramCommand_1.CreateMultiplexProgramCommand(args);
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
    createPartnerInput(args, optionsOrCb, cb) {
        const command = new CreatePartnerInputCommand_1.CreatePartnerInputCommand(args);
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
    createTags(args, optionsOrCb, cb) {
        const command = new CreateTagsCommand_1.CreateTagsCommand(args);
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
    deleteChannel(args, optionsOrCb, cb) {
        const command = new DeleteChannelCommand_1.DeleteChannelCommand(args);
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
    deleteInput(args, optionsOrCb, cb) {
        const command = new DeleteInputCommand_1.DeleteInputCommand(args);
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
    deleteInputSecurityGroup(args, optionsOrCb, cb) {
        const command = new DeleteInputSecurityGroupCommand_1.DeleteInputSecurityGroupCommand(args);
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
    deleteMultiplex(args, optionsOrCb, cb) {
        const command = new DeleteMultiplexCommand_1.DeleteMultiplexCommand(args);
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
    deleteMultiplexProgram(args, optionsOrCb, cb) {
        const command = new DeleteMultiplexProgramCommand_1.DeleteMultiplexProgramCommand(args);
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
    deleteReservation(args, optionsOrCb, cb) {
        const command = new DeleteReservationCommand_1.DeleteReservationCommand(args);
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
    deleteSchedule(args, optionsOrCb, cb) {
        const command = new DeleteScheduleCommand_1.DeleteScheduleCommand(args);
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
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
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
    describeChannel(args, optionsOrCb, cb) {
        const command = new DescribeChannelCommand_1.DescribeChannelCommand(args);
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
    describeInput(args, optionsOrCb, cb) {
        const command = new DescribeInputCommand_1.DescribeInputCommand(args);
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
    describeInputDevice(args, optionsOrCb, cb) {
        const command = new DescribeInputDeviceCommand_1.DescribeInputDeviceCommand(args);
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
    describeInputDeviceThumbnail(args, optionsOrCb, cb) {
        const command = new DescribeInputDeviceThumbnailCommand_1.DescribeInputDeviceThumbnailCommand(args);
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
    describeInputSecurityGroup(args, optionsOrCb, cb) {
        const command = new DescribeInputSecurityGroupCommand_1.DescribeInputSecurityGroupCommand(args);
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
    describeMultiplex(args, optionsOrCb, cb) {
        const command = new DescribeMultiplexCommand_1.DescribeMultiplexCommand(args);
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
    describeMultiplexProgram(args, optionsOrCb, cb) {
        const command = new DescribeMultiplexProgramCommand_1.DescribeMultiplexProgramCommand(args);
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
    describeOffering(args, optionsOrCb, cb) {
        const command = new DescribeOfferingCommand_1.DescribeOfferingCommand(args);
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
    describeReservation(args, optionsOrCb, cb) {
        const command = new DescribeReservationCommand_1.DescribeReservationCommand(args);
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
    describeSchedule(args, optionsOrCb, cb) {
        const command = new DescribeScheduleCommand_1.DescribeScheduleCommand(args);
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
    listChannels(args, optionsOrCb, cb) {
        const command = new ListChannelsCommand_1.ListChannelsCommand(args);
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
    listInputDevices(args, optionsOrCb, cb) {
        const command = new ListInputDevicesCommand_1.ListInputDevicesCommand(args);
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
    listInputDeviceTransfers(args, optionsOrCb, cb) {
        const command = new ListInputDeviceTransfersCommand_1.ListInputDeviceTransfersCommand(args);
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
    listInputs(args, optionsOrCb, cb) {
        const command = new ListInputsCommand_1.ListInputsCommand(args);
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
    listInputSecurityGroups(args, optionsOrCb, cb) {
        const command = new ListInputSecurityGroupsCommand_1.ListInputSecurityGroupsCommand(args);
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
    listMultiplexes(args, optionsOrCb, cb) {
        const command = new ListMultiplexesCommand_1.ListMultiplexesCommand(args);
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
    listMultiplexPrograms(args, optionsOrCb, cb) {
        const command = new ListMultiplexProgramsCommand_1.ListMultiplexProgramsCommand(args);
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
    listOfferings(args, optionsOrCb, cb) {
        const command = new ListOfferingsCommand_1.ListOfferingsCommand(args);
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
    listReservations(args, optionsOrCb, cb) {
        const command = new ListReservationsCommand_1.ListReservationsCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    purchaseOffering(args, optionsOrCb, cb) {
        const command = new PurchaseOfferingCommand_1.PurchaseOfferingCommand(args);
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
    rejectInputDeviceTransfer(args, optionsOrCb, cb) {
        const command = new RejectInputDeviceTransferCommand_1.RejectInputDeviceTransferCommand(args);
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
    startChannel(args, optionsOrCb, cb) {
        const command = new StartChannelCommand_1.StartChannelCommand(args);
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
    startMultiplex(args, optionsOrCb, cb) {
        const command = new StartMultiplexCommand_1.StartMultiplexCommand(args);
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
    stopChannel(args, optionsOrCb, cb) {
        const command = new StopChannelCommand_1.StopChannelCommand(args);
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
    stopMultiplex(args, optionsOrCb, cb) {
        const command = new StopMultiplexCommand_1.StopMultiplexCommand(args);
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
    transferInputDevice(args, optionsOrCb, cb) {
        const command = new TransferInputDeviceCommand_1.TransferInputDeviceCommand(args);
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
    updateChannel(args, optionsOrCb, cb) {
        const command = new UpdateChannelCommand_1.UpdateChannelCommand(args);
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
    updateChannelClass(args, optionsOrCb, cb) {
        const command = new UpdateChannelClassCommand_1.UpdateChannelClassCommand(args);
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
    updateInput(args, optionsOrCb, cb) {
        const command = new UpdateInputCommand_1.UpdateInputCommand(args);
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
    updateInputDevice(args, optionsOrCb, cb) {
        const command = new UpdateInputDeviceCommand_1.UpdateInputDeviceCommand(args);
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
    updateInputSecurityGroup(args, optionsOrCb, cb) {
        const command = new UpdateInputSecurityGroupCommand_1.UpdateInputSecurityGroupCommand(args);
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
    updateMultiplex(args, optionsOrCb, cb) {
        const command = new UpdateMultiplexCommand_1.UpdateMultiplexCommand(args);
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
    updateMultiplexProgram(args, optionsOrCb, cb) {
        const command = new UpdateMultiplexProgramCommand_1.UpdateMultiplexProgramCommand(args);
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
    updateReservation(args, optionsOrCb, cb) {
        const command = new UpdateReservationCommand_1.UpdateReservationCommand(args);
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
exports.MediaLive = MediaLive;
//# sourceMappingURL=MediaLive.js.map