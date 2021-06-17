import { MediaLiveClient } from "./MediaLiveClient";
import { AcceptInputDeviceTransferCommandInput, AcceptInputDeviceTransferCommandOutput } from "./commands/AcceptInputDeviceTransferCommand";
import { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "./commands/BatchDeleteCommand";
import { BatchStartCommandInput, BatchStartCommandOutput } from "./commands/BatchStartCommand";
import { BatchStopCommandInput, BatchStopCommandOutput } from "./commands/BatchStopCommand";
import { BatchUpdateScheduleCommandInput, BatchUpdateScheduleCommandOutput } from "./commands/BatchUpdateScheduleCommand";
import { CancelInputDeviceTransferCommandInput, CancelInputDeviceTransferCommandOutput } from "./commands/CancelInputDeviceTransferCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import { CreateInputSecurityGroupCommandInput, CreateInputSecurityGroupCommandOutput } from "./commands/CreateInputSecurityGroupCommand";
import { CreateMultiplexCommandInput, CreateMultiplexCommandOutput } from "./commands/CreateMultiplexCommand";
import { CreateMultiplexProgramCommandInput, CreateMultiplexProgramCommandOutput } from "./commands/CreateMultiplexProgramCommand";
import { CreatePartnerInputCommandInput, CreatePartnerInputCommandOutput } from "./commands/CreatePartnerInputCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import { DeleteInputSecurityGroupCommandInput, DeleteInputSecurityGroupCommandOutput } from "./commands/DeleteInputSecurityGroupCommand";
import { DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput } from "./commands/DeleteMultiplexCommand";
import { DeleteMultiplexProgramCommandInput, DeleteMultiplexProgramCommandOutput } from "./commands/DeleteMultiplexProgramCommand";
import { DeleteReservationCommandInput, DeleteReservationCommandOutput } from "./commands/DeleteReservationCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeInputCommandInput, DescribeInputCommandOutput } from "./commands/DescribeInputCommand";
import { DescribeInputDeviceCommandInput, DescribeInputDeviceCommandOutput } from "./commands/DescribeInputDeviceCommand";
import { DescribeInputDeviceThumbnailCommandInput, DescribeInputDeviceThumbnailCommandOutput } from "./commands/DescribeInputDeviceThumbnailCommand";
import { DescribeInputSecurityGroupCommandInput, DescribeInputSecurityGroupCommandOutput } from "./commands/DescribeInputSecurityGroupCommand";
import { DescribeMultiplexCommandInput, DescribeMultiplexCommandOutput } from "./commands/DescribeMultiplexCommand";
import { DescribeMultiplexProgramCommandInput, DescribeMultiplexProgramCommandOutput } from "./commands/DescribeMultiplexProgramCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "./commands/DescribeOfferingCommand";
import { DescribeReservationCommandInput, DescribeReservationCommandOutput } from "./commands/DescribeReservationCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput } from "./commands/ListInputDeviceTransfersCommand";
import { ListInputDevicesCommandInput, ListInputDevicesCommandOutput } from "./commands/ListInputDevicesCommand";
import { ListInputSecurityGroupsCommandInput, ListInputSecurityGroupsCommandOutput } from "./commands/ListInputSecurityGroupsCommand";
import { ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import { ListMultiplexProgramsCommandInput, ListMultiplexProgramsCommandOutput } from "./commands/ListMultiplexProgramsCommand";
import { ListMultiplexesCommandInput, ListMultiplexesCommandOutput } from "./commands/ListMultiplexesCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import { RejectInputDeviceTransferCommandInput, RejectInputDeviceTransferCommandOutput } from "./commands/RejectInputDeviceTransferCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "./commands/StartMultiplexCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { StopMultiplexCommandInput, StopMultiplexCommandOutput } from "./commands/StopMultiplexCommand";
import { TransferInputDeviceCommandInput, TransferInputDeviceCommandOutput } from "./commands/TransferInputDeviceCommand";
import { UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput } from "./commands/UpdateChannelClassCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import { UpdateInputDeviceCommandInput, UpdateInputDeviceCommandOutput } from "./commands/UpdateInputDeviceCommand";
import { UpdateInputSecurityGroupCommandInput, UpdateInputSecurityGroupCommandOutput } from "./commands/UpdateInputSecurityGroupCommand";
import { UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput } from "./commands/UpdateMultiplexCommand";
import { UpdateMultiplexProgramCommandInput, UpdateMultiplexProgramCommandOutput } from "./commands/UpdateMultiplexProgramCommand";
import { UpdateReservationCommandInput, UpdateReservationCommandOutput } from "./commands/UpdateReservationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * API for AWS Elemental MediaLive
 */
export declare class MediaLive extends MediaLiveClient {
    /**
     * Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.
     */
    acceptInputDeviceTransfer(args: AcceptInputDeviceTransferCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInputDeviceTransferCommandOutput>;
    acceptInputDeviceTransfer(args: AcceptInputDeviceTransferCommandInput, cb: (err: any, data?: AcceptInputDeviceTransferCommandOutput) => void): void;
    acceptInputDeviceTransfer(args: AcceptInputDeviceTransferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInputDeviceTransferCommandOutput) => void): void;
    /**
     * Starts delete of resources.
     */
    batchDelete(args: BatchDeleteCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteCommandOutput>;
    batchDelete(args: BatchDeleteCommandInput, cb: (err: any, data?: BatchDeleteCommandOutput) => void): void;
    batchDelete(args: BatchDeleteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteCommandOutput) => void): void;
    /**
     * Starts existing resources
     */
    batchStart(args: BatchStartCommandInput, options?: __HttpHandlerOptions): Promise<BatchStartCommandOutput>;
    batchStart(args: BatchStartCommandInput, cb: (err: any, data?: BatchStartCommandOutput) => void): void;
    batchStart(args: BatchStartCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchStartCommandOutput) => void): void;
    /**
     * Stops running resources
     */
    batchStop(args: BatchStopCommandInput, options?: __HttpHandlerOptions): Promise<BatchStopCommandOutput>;
    batchStop(args: BatchStopCommandInput, cb: (err: any, data?: BatchStopCommandOutput) => void): void;
    batchStop(args: BatchStopCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchStopCommandOutput) => void): void;
    /**
     * Update a channel schedule
     */
    batchUpdateSchedule(args: BatchUpdateScheduleCommandInput, options?: __HttpHandlerOptions): Promise<BatchUpdateScheduleCommandOutput>;
    batchUpdateSchedule(args: BatchUpdateScheduleCommandInput, cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void): void;
    batchUpdateSchedule(args: BatchUpdateScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void): void;
    /**
     * Cancel an input device transfer that you have requested.
     */
    cancelInputDeviceTransfer(args: CancelInputDeviceTransferCommandInput, options?: __HttpHandlerOptions): Promise<CancelInputDeviceTransferCommandOutput>;
    cancelInputDeviceTransfer(args: CancelInputDeviceTransferCommandInput, cb: (err: any, data?: CancelInputDeviceTransferCommandOutput) => void): void;
    cancelInputDeviceTransfer(args: CancelInputDeviceTransferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelInputDeviceTransferCommandOutput) => void): void;
    /**
     * Creates a new channel
     */
    createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
    createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    createChannel(args: CreateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    /**
     * Create an input
     */
    createInput(args: CreateInputCommandInput, options?: __HttpHandlerOptions): Promise<CreateInputCommandOutput>;
    createInput(args: CreateInputCommandInput, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
    createInput(args: CreateInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
    /**
     * Creates a Input Security Group
     */
    createInputSecurityGroup(args: CreateInputSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateInputSecurityGroupCommandOutput>;
    createInputSecurityGroup(args: CreateInputSecurityGroupCommandInput, cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void): void;
    createInputSecurityGroup(args: CreateInputSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void): void;
    /**
     * Create a new multiplex.
     */
    createMultiplex(args: CreateMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<CreateMultiplexCommandOutput>;
    createMultiplex(args: CreateMultiplexCommandInput, cb: (err: any, data?: CreateMultiplexCommandOutput) => void): void;
    createMultiplex(args: CreateMultiplexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMultiplexCommandOutput) => void): void;
    /**
     * Create a new program in the multiplex.
     */
    createMultiplexProgram(args: CreateMultiplexProgramCommandInput, options?: __HttpHandlerOptions): Promise<CreateMultiplexProgramCommandOutput>;
    createMultiplexProgram(args: CreateMultiplexProgramCommandInput, cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void): void;
    createMultiplexProgram(args: CreateMultiplexProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void): void;
    /**
     * Create a partner input
     */
    createPartnerInput(args: CreatePartnerInputCommandInput, options?: __HttpHandlerOptions): Promise<CreatePartnerInputCommandOutput>;
    createPartnerInput(args: CreatePartnerInputCommandInput, cb: (err: any, data?: CreatePartnerInputCommandOutput) => void): void;
    createPartnerInput(args: CreatePartnerInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePartnerInputCommandOutput) => void): void;
    /**
     * Create tags for a resource
     */
    createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
    createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    createTags(args: CreateTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    /**
     * Starts deletion of channel. The associated outputs are also deleted.
     */
    deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
    deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    deleteChannel(args: DeleteChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    /**
     * Deletes the input end point
     */
    deleteInput(args: DeleteInputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInputCommandOutput>;
    deleteInput(args: DeleteInputCommandInput, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
    deleteInput(args: DeleteInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
    /**
     * Deletes an Input Security Group
     */
    deleteInputSecurityGroup(args: DeleteInputSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInputSecurityGroupCommandOutput>;
    deleteInputSecurityGroup(args: DeleteInputSecurityGroupCommandInput, cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void): void;
    deleteInputSecurityGroup(args: DeleteInputSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void): void;
    /**
     * Delete a multiplex. The multiplex must be idle.
     */
    deleteMultiplex(args: DeleteMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMultiplexCommandOutput>;
    deleteMultiplex(args: DeleteMultiplexCommandInput, cb: (err: any, data?: DeleteMultiplexCommandOutput) => void): void;
    deleteMultiplex(args: DeleteMultiplexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMultiplexCommandOutput) => void): void;
    /**
     * Delete a program from a multiplex.
     */
    deleteMultiplexProgram(args: DeleteMultiplexProgramCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMultiplexProgramCommandOutput>;
    deleteMultiplexProgram(args: DeleteMultiplexProgramCommandInput, cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void): void;
    deleteMultiplexProgram(args: DeleteMultiplexProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void): void;
    /**
     * Delete an expired reservation.
     */
    deleteReservation(args: DeleteReservationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReservationCommandOutput>;
    deleteReservation(args: DeleteReservationCommandInput, cb: (err: any, data?: DeleteReservationCommandOutput) => void): void;
    deleteReservation(args: DeleteReservationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReservationCommandOutput) => void): void;
    /**
     * Delete all schedule actions on a channel.
     */
    deleteSchedule(args: DeleteScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScheduleCommandOutput>;
    deleteSchedule(args: DeleteScheduleCommandInput, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
    deleteSchedule(args: DeleteScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
    /**
     * Removes tags for a resource
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * Gets details about a channel
     */
    describeChannel(args: DescribeChannelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeChannelCommandOutput>;
    describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    describeChannel(args: DescribeChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    /**
     * Produces details about an input
     */
    describeInput(args: DescribeInputCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputCommandOutput>;
    describeInput(args: DescribeInputCommandInput, cb: (err: any, data?: DescribeInputCommandOutput) => void): void;
    describeInput(args: DescribeInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInputCommandOutput) => void): void;
    /**
     * Gets the details for the input device
     */
    describeInputDevice(args: DescribeInputDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputDeviceCommandOutput>;
    describeInputDevice(args: DescribeInputDeviceCommandInput, cb: (err: any, data?: DescribeInputDeviceCommandOutput) => void): void;
    describeInputDevice(args: DescribeInputDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInputDeviceCommandOutput) => void): void;
    /**
     * Get the latest thumbnail data for the input device.
     */
    describeInputDeviceThumbnail(args: DescribeInputDeviceThumbnailCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputDeviceThumbnailCommandOutput>;
    describeInputDeviceThumbnail(args: DescribeInputDeviceThumbnailCommandInput, cb: (err: any, data?: DescribeInputDeviceThumbnailCommandOutput) => void): void;
    describeInputDeviceThumbnail(args: DescribeInputDeviceThumbnailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInputDeviceThumbnailCommandOutput) => void): void;
    /**
     * Produces a summary of an Input Security Group
     */
    describeInputSecurityGroup(args: DescribeInputSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputSecurityGroupCommandOutput>;
    describeInputSecurityGroup(args: DescribeInputSecurityGroupCommandInput, cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void): void;
    describeInputSecurityGroup(args: DescribeInputSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void): void;
    /**
     * Gets details about a multiplex.
     */
    describeMultiplex(args: DescribeMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMultiplexCommandOutput>;
    describeMultiplex(args: DescribeMultiplexCommandInput, cb: (err: any, data?: DescribeMultiplexCommandOutput) => void): void;
    describeMultiplex(args: DescribeMultiplexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMultiplexCommandOutput) => void): void;
    /**
     * Get the details for a program in a multiplex.
     */
    describeMultiplexProgram(args: DescribeMultiplexProgramCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMultiplexProgramCommandOutput>;
    describeMultiplexProgram(args: DescribeMultiplexProgramCommandInput, cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void): void;
    describeMultiplexProgram(args: DescribeMultiplexProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void): void;
    /**
     * Get details for an offering.
     */
    describeOffering(args: DescribeOfferingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOfferingCommandOutput>;
    describeOffering(args: DescribeOfferingCommandInput, cb: (err: any, data?: DescribeOfferingCommandOutput) => void): void;
    describeOffering(args: DescribeOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOfferingCommandOutput) => void): void;
    /**
     * Get details for a reservation.
     */
    describeReservation(args: DescribeReservationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservationCommandOutput>;
    describeReservation(args: DescribeReservationCommandInput, cb: (err: any, data?: DescribeReservationCommandOutput) => void): void;
    describeReservation(args: DescribeReservationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservationCommandOutput) => void): void;
    /**
     * Get a channel schedule
     */
    describeSchedule(args: DescribeScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScheduleCommandOutput>;
    describeSchedule(args: DescribeScheduleCommandInput, cb: (err: any, data?: DescribeScheduleCommandOutput) => void): void;
    describeSchedule(args: DescribeScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScheduleCommandOutput) => void): void;
    /**
     * Produces list of channels that have been created
     */
    listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
    listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    listChannels(args: ListChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    /**
     * List input devices
     */
    listInputDevices(args: ListInputDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListInputDevicesCommandOutput>;
    listInputDevices(args: ListInputDevicesCommandInput, cb: (err: any, data?: ListInputDevicesCommandOutput) => void): void;
    listInputDevices(args: ListInputDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInputDevicesCommandOutput) => void): void;
    /**
     * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
     */
    listInputDeviceTransfers(args: ListInputDeviceTransfersCommandInput, options?: __HttpHandlerOptions): Promise<ListInputDeviceTransfersCommandOutput>;
    listInputDeviceTransfers(args: ListInputDeviceTransfersCommandInput, cb: (err: any, data?: ListInputDeviceTransfersCommandOutput) => void): void;
    listInputDeviceTransfers(args: ListInputDeviceTransfersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInputDeviceTransfersCommandOutput) => void): void;
    /**
     * Produces list of inputs that have been created
     */
    listInputs(args: ListInputsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputsCommandOutput>;
    listInputs(args: ListInputsCommandInput, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
    listInputs(args: ListInputsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
    /**
     * Produces a list of Input Security Groups for an account
     */
    listInputSecurityGroups(args: ListInputSecurityGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputSecurityGroupsCommandOutput>;
    listInputSecurityGroups(args: ListInputSecurityGroupsCommandInput, cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void): void;
    listInputSecurityGroups(args: ListInputSecurityGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void): void;
    /**
     * Retrieve a list of the existing multiplexes.
     */
    listMultiplexes(args: ListMultiplexesCommandInput, options?: __HttpHandlerOptions): Promise<ListMultiplexesCommandOutput>;
    listMultiplexes(args: ListMultiplexesCommandInput, cb: (err: any, data?: ListMultiplexesCommandOutput) => void): void;
    listMultiplexes(args: ListMultiplexesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMultiplexesCommandOutput) => void): void;
    /**
     * List the programs that currently exist for a specific multiplex.
     */
    listMultiplexPrograms(args: ListMultiplexProgramsCommandInput, options?: __HttpHandlerOptions): Promise<ListMultiplexProgramsCommandOutput>;
    listMultiplexPrograms(args: ListMultiplexProgramsCommandInput, cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void): void;
    listMultiplexPrograms(args: ListMultiplexProgramsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void): void;
    /**
     * List offerings available for purchase.
     */
    listOfferings(args: ListOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingsCommandOutput>;
    listOfferings(args: ListOfferingsCommandInput, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
    listOfferings(args: ListOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
    /**
     * List purchased reservations.
     */
    listReservations(args: ListReservationsCommandInput, options?: __HttpHandlerOptions): Promise<ListReservationsCommandOutput>;
    listReservations(args: ListReservationsCommandInput, cb: (err: any, data?: ListReservationsCommandOutput) => void): void;
    listReservations(args: ListReservationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReservationsCommandOutput) => void): void;
    /**
     * Produces list of tags that have been created for a resource
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Purchase an offering and create a reservation.
     */
    purchaseOffering(args: PurchaseOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseOfferingCommandOutput>;
    purchaseOffering(args: PurchaseOfferingCommandInput, cb: (err: any, data?: PurchaseOfferingCommandOutput) => void): void;
    purchaseOffering(args: PurchaseOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseOfferingCommandOutput) => void): void;
    /**
     * Reject the transfer of the specified input device to your AWS account.
     */
    rejectInputDeviceTransfer(args: RejectInputDeviceTransferCommandInput, options?: __HttpHandlerOptions): Promise<RejectInputDeviceTransferCommandOutput>;
    rejectInputDeviceTransfer(args: RejectInputDeviceTransferCommandInput, cb: (err: any, data?: RejectInputDeviceTransferCommandOutput) => void): void;
    rejectInputDeviceTransfer(args: RejectInputDeviceTransferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectInputDeviceTransferCommandOutput) => void): void;
    /**
     * Starts an existing channel
     */
    startChannel(args: StartChannelCommandInput, options?: __HttpHandlerOptions): Promise<StartChannelCommandOutput>;
    startChannel(args: StartChannelCommandInput, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
    startChannel(args: StartChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
    /**
     * Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.
     */
    startMultiplex(args: StartMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<StartMultiplexCommandOutput>;
    startMultiplex(args: StartMultiplexCommandInput, cb: (err: any, data?: StartMultiplexCommandOutput) => void): void;
    startMultiplex(args: StartMultiplexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMultiplexCommandOutput) => void): void;
    /**
     * Stops a running channel
     */
    stopChannel(args: StopChannelCommandInput, options?: __HttpHandlerOptions): Promise<StopChannelCommandOutput>;
    stopChannel(args: StopChannelCommandInput, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
    stopChannel(args: StopChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
    /**
     * Stops a running multiplex. If the multiplex isn't running, this action has no effect.
     */
    stopMultiplex(args: StopMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<StopMultiplexCommandOutput>;
    stopMultiplex(args: StopMultiplexCommandInput, cb: (err: any, data?: StopMultiplexCommandOutput) => void): void;
    stopMultiplex(args: StopMultiplexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopMultiplexCommandOutput) => void): void;
    /**
     * Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.
     */
    transferInputDevice(args: TransferInputDeviceCommandInput, options?: __HttpHandlerOptions): Promise<TransferInputDeviceCommandOutput>;
    transferInputDevice(args: TransferInputDeviceCommandInput, cb: (err: any, data?: TransferInputDeviceCommandOutput) => void): void;
    transferInputDevice(args: TransferInputDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TransferInputDeviceCommandOutput) => void): void;
    /**
     * Updates a channel.
     */
    updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
    updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    updateChannel(args: UpdateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    /**
     * Changes the class of the channel.
     */
    updateChannelClass(args: UpdateChannelClassCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelClassCommandOutput>;
    updateChannelClass(args: UpdateChannelClassCommandInput, cb: (err: any, data?: UpdateChannelClassCommandOutput) => void): void;
    updateChannelClass(args: UpdateChannelClassCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateChannelClassCommandOutput) => void): void;
    /**
     * Updates an input.
     */
    updateInput(args: UpdateInputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputCommandOutput>;
    updateInput(args: UpdateInputCommandInput, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
    updateInput(args: UpdateInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
    /**
     * Updates the parameters for the input device.
     */
    updateInputDevice(args: UpdateInputDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputDeviceCommandOutput>;
    updateInputDevice(args: UpdateInputDeviceCommandInput, cb: (err: any, data?: UpdateInputDeviceCommandOutput) => void): void;
    updateInputDevice(args: UpdateInputDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInputDeviceCommandOutput) => void): void;
    /**
     * Update an Input Security Group's Whilelists.
     */
    updateInputSecurityGroup(args: UpdateInputSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputSecurityGroupCommandOutput>;
    updateInputSecurityGroup(args: UpdateInputSecurityGroupCommandInput, cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void): void;
    updateInputSecurityGroup(args: UpdateInputSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void): void;
    /**
     * Updates a multiplex.
     */
    updateMultiplex(args: UpdateMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMultiplexCommandOutput>;
    updateMultiplex(args: UpdateMultiplexCommandInput, cb: (err: any, data?: UpdateMultiplexCommandOutput) => void): void;
    updateMultiplex(args: UpdateMultiplexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMultiplexCommandOutput) => void): void;
    /**
     * Update a program in a multiplex.
     */
    updateMultiplexProgram(args: UpdateMultiplexProgramCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMultiplexProgramCommandOutput>;
    updateMultiplexProgram(args: UpdateMultiplexProgramCommandInput, cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void): void;
    updateMultiplexProgram(args: UpdateMultiplexProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void): void;
    /**
     * Update reservation.
     */
    updateReservation(args: UpdateReservationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReservationCommandOutput>;
    updateReservation(args: UpdateReservationCommandInput, cb: (err: any, data?: UpdateReservationCommandOutput) => void): void;
    updateReservation(args: UpdateReservationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReservationCommandOutput) => void): void;
}
