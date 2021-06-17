import { MediaConnectClient } from "./MediaConnectClient";
import { AddFlowMediaStreamsCommandInput, AddFlowMediaStreamsCommandOutput } from "./commands/AddFlowMediaStreamsCommand";
import { AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput } from "./commands/AddFlowOutputsCommand";
import { AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput } from "./commands/AddFlowSourcesCommand";
import { AddFlowVpcInterfacesCommandInput, AddFlowVpcInterfacesCommandOutput } from "./commands/AddFlowVpcInterfacesCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "./commands/DescribeFlowCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "./commands/DescribeOfferingCommand";
import { DescribeReservationCommandInput, DescribeReservationCommandOutput } from "./commands/DescribeReservationCommand";
import { GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput } from "./commands/GrantFlowEntitlementsCommand";
import { ListEntitlementsCommandInput, ListEntitlementsCommandOutput } from "./commands/ListEntitlementsCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import { RemoveFlowMediaStreamCommandInput, RemoveFlowMediaStreamCommandOutput } from "./commands/RemoveFlowMediaStreamCommand";
import { RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput } from "./commands/RemoveFlowOutputCommand";
import { RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput } from "./commands/RemoveFlowSourceCommand";
import { RemoveFlowVpcInterfaceCommandInput, RemoveFlowVpcInterfaceCommandOutput } from "./commands/RemoveFlowVpcInterfaceCommand";
import { RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput } from "./commands/RevokeFlowEntitlementCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import { UpdateFlowEntitlementCommandInput, UpdateFlowEntitlementCommandOutput } from "./commands/UpdateFlowEntitlementCommand";
import { UpdateFlowMediaStreamCommandInput, UpdateFlowMediaStreamCommandOutput } from "./commands/UpdateFlowMediaStreamCommand";
import { UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput } from "./commands/UpdateFlowOutputCommand";
import { UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput } from "./commands/UpdateFlowSourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * API for AWS Elemental MediaConnect
 */
export declare class MediaConnect extends MediaConnectClient {
    /**
     * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
     */
    addFlowMediaStreams(args: AddFlowMediaStreamsCommandInput, options?: __HttpHandlerOptions): Promise<AddFlowMediaStreamsCommandOutput>;
    addFlowMediaStreams(args: AddFlowMediaStreamsCommandInput, cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void): void;
    addFlowMediaStreams(args: AddFlowMediaStreamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void): void;
    /**
     * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
     */
    addFlowOutputs(args: AddFlowOutputsCommandInput, options?: __HttpHandlerOptions): Promise<AddFlowOutputsCommandOutput>;
    addFlowOutputs(args: AddFlowOutputsCommandInput, cb: (err: any, data?: AddFlowOutputsCommandOutput) => void): void;
    addFlowOutputs(args: AddFlowOutputsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddFlowOutputsCommandOutput) => void): void;
    /**
     * Adds Sources to flow
     */
    addFlowSources(args: AddFlowSourcesCommandInput, options?: __HttpHandlerOptions): Promise<AddFlowSourcesCommandOutput>;
    addFlowSources(args: AddFlowSourcesCommandInput, cb: (err: any, data?: AddFlowSourcesCommandOutput) => void): void;
    addFlowSources(args: AddFlowSourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddFlowSourcesCommandOutput) => void): void;
    /**
     * Adds VPC interfaces to flow
     */
    addFlowVpcInterfaces(args: AddFlowVpcInterfacesCommandInput, options?: __HttpHandlerOptions): Promise<AddFlowVpcInterfacesCommandOutput>;
    addFlowVpcInterfaces(args: AddFlowVpcInterfacesCommandInput, cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void): void;
    addFlowVpcInterfaces(args: AddFlowVpcInterfacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void): void;
    /**
     * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
     */
    createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
    createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
    createFlow(args: CreateFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
    /**
     * Deletes a flow. Before you can delete a flow, you must stop the flow.
     */
    deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
    deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
    deleteFlow(args: DeleteFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
    /**
     * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
     */
    describeFlow(args: DescribeFlowCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowCommandOutput>;
    describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
    describeFlow(args: DescribeFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
    /**
     * Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).
     */
    describeOffering(args: DescribeOfferingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOfferingCommandOutput>;
    describeOffering(args: DescribeOfferingCommandInput, cb: (err: any, data?: DescribeOfferingCommandOutput) => void): void;
    describeOffering(args: DescribeOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOfferingCommandOutput) => void): void;
    /**
     * Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).
     */
    describeReservation(args: DescribeReservationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservationCommandOutput>;
    describeReservation(args: DescribeReservationCommandInput, cb: (err: any, data?: DescribeReservationCommandOutput) => void): void;
    describeReservation(args: DescribeReservationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservationCommandOutput) => void): void;
    /**
     * Grants entitlements to an existing flow.
     */
    grantFlowEntitlements(args: GrantFlowEntitlementsCommandInput, options?: __HttpHandlerOptions): Promise<GrantFlowEntitlementsCommandOutput>;
    grantFlowEntitlements(args: GrantFlowEntitlementsCommandInput, cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void): void;
    grantFlowEntitlements(args: GrantFlowEntitlementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void): void;
    /**
     * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
     */
    listEntitlements(args: ListEntitlementsCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitlementsCommandOutput>;
    listEntitlements(args: ListEntitlementsCommandInput, cb: (err: any, data?: ListEntitlementsCommandOutput) => void): void;
    listEntitlements(args: ListEntitlementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEntitlementsCommandOutput) => void): void;
    /**
     * Displays a list of flows that are associated with this account. This request returns a paginated result.
     */
    listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
    listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
    listFlows(args: ListFlowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
    /**
     * Displays a list of all offerings that are available to this account in the current AWS Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.
     */
    listOfferings(args: ListOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingsCommandOutput>;
    listOfferings(args: ListOfferingsCommandInput, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
    listOfferings(args: ListOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
    /**
     * Displays a list of all reservations that have been purchased by this account in the current AWS Region. This list includes all reservations in all states (such as active and expired).
     */
    listReservations(args: ListReservationsCommandInput, options?: __HttpHandlerOptions): Promise<ListReservationsCommandOutput>;
    listReservations(args: ListReservationsCommandInput, cb: (err: any, data?: ListReservationsCommandOutput) => void): void;
    listReservations(args: ListReservationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReservationsCommandOutput) => void): void;
    /**
     * List all tags on an AWS Elemental MediaConnect resource
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
     */
    purchaseOffering(args: PurchaseOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseOfferingCommandOutput>;
    purchaseOffering(args: PurchaseOfferingCommandInput, cb: (err: any, data?: PurchaseOfferingCommandOutput) => void): void;
    purchaseOffering(args: PurchaseOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseOfferingCommandOutput) => void): void;
    /**
     * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
     */
    removeFlowMediaStream(args: RemoveFlowMediaStreamCommandInput, options?: __HttpHandlerOptions): Promise<RemoveFlowMediaStreamCommandOutput>;
    removeFlowMediaStream(args: RemoveFlowMediaStreamCommandInput, cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void): void;
    removeFlowMediaStream(args: RemoveFlowMediaStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void): void;
    /**
     * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
     */
    removeFlowOutput(args: RemoveFlowOutputCommandInput, options?: __HttpHandlerOptions): Promise<RemoveFlowOutputCommandOutput>;
    removeFlowOutput(args: RemoveFlowOutputCommandInput, cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void): void;
    removeFlowOutput(args: RemoveFlowOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void): void;
    /**
     * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
     */
    removeFlowSource(args: RemoveFlowSourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveFlowSourceCommandOutput>;
    removeFlowSource(args: RemoveFlowSourceCommandInput, cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void): void;
    removeFlowSource(args: RemoveFlowSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void): void;
    /**
     * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
     */
    removeFlowVpcInterface(args: RemoveFlowVpcInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveFlowVpcInterfaceCommandOutput>;
    removeFlowVpcInterface(args: RemoveFlowVpcInterfaceCommandInput, cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void): void;
    removeFlowVpcInterface(args: RemoveFlowVpcInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void): void;
    /**
     * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
     */
    revokeFlowEntitlement(args: RevokeFlowEntitlementCommandInput, options?: __HttpHandlerOptions): Promise<RevokeFlowEntitlementCommandOutput>;
    revokeFlowEntitlement(args: RevokeFlowEntitlementCommandInput, cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void): void;
    revokeFlowEntitlement(args: RevokeFlowEntitlementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void): void;
    /**
     * Starts a flow.
     */
    startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
    startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
    startFlow(args: StartFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
    /**
     * Stops a flow.
     */
    stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
    stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
    stopFlow(args: StopFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
    /**
     * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * Deletes specified tags from a resource.
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * Updates flow
     */
    updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
    updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
    updateFlow(args: UpdateFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
    /**
     * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
     */
    updateFlowEntitlement(args: UpdateFlowEntitlementCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowEntitlementCommandOutput>;
    updateFlowEntitlement(args: UpdateFlowEntitlementCommandInput, cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void): void;
    updateFlowEntitlement(args: UpdateFlowEntitlementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void): void;
    /**
     * Updates an existing media stream.
     */
    updateFlowMediaStream(args: UpdateFlowMediaStreamCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowMediaStreamCommandOutput>;
    updateFlowMediaStream(args: UpdateFlowMediaStreamCommandInput, cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void): void;
    updateFlowMediaStream(args: UpdateFlowMediaStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void): void;
    /**
     * Updates an existing flow output.
     */
    updateFlowOutput(args: UpdateFlowOutputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowOutputCommandOutput>;
    updateFlowOutput(args: UpdateFlowOutputCommandInput, cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void): void;
    updateFlowOutput(args: UpdateFlowOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void): void;
    /**
     * Updates the source of a flow.
     */
    updateFlowSource(args: UpdateFlowSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowSourceCommandOutput>;
    updateFlowSource(args: UpdateFlowSourceCommandInput, cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void): void;
    updateFlowSource(args: UpdateFlowSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void): void;
}
