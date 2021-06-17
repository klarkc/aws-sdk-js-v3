import { SSMContactsClient } from "./SSMContactsClient";
import { AcceptPageCommandInput, AcceptPageCommandOutput } from "./commands/AcceptPageCommand";
import { ActivateContactChannelCommandInput, ActivateContactChannelCommandOutput } from "./commands/ActivateContactChannelCommand";
import { CreateContactChannelCommandInput, CreateContactChannelCommandOutput } from "./commands/CreateContactChannelCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "./commands/CreateContactCommand";
import { DeactivateContactChannelCommandInput, DeactivateContactChannelCommandOutput } from "./commands/DeactivateContactChannelCommand";
import { DeleteContactChannelCommandInput, DeleteContactChannelCommandOutput } from "./commands/DeleteContactChannelCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "./commands/DeleteContactCommand";
import { DescribeEngagementCommandInput, DescribeEngagementCommandOutput } from "./commands/DescribeEngagementCommand";
import { DescribePageCommandInput, DescribePageCommandOutput } from "./commands/DescribePageCommand";
import { GetContactChannelCommandInput, GetContactChannelCommandOutput } from "./commands/GetContactChannelCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import { GetContactPolicyCommandInput, GetContactPolicyCommandOutput } from "./commands/GetContactPolicyCommand";
import { ListContactChannelsCommandInput, ListContactChannelsCommandOutput } from "./commands/ListContactChannelsCommand";
import { ListContactsCommandInput, ListContactsCommandOutput } from "./commands/ListContactsCommand";
import { ListEngagementsCommandInput, ListEngagementsCommandOutput } from "./commands/ListEngagementsCommand";
import { ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput } from "./commands/ListPageReceiptsCommand";
import { ListPagesByContactCommandInput, ListPagesByContactCommandOutput } from "./commands/ListPagesByContactCommand";
import { ListPagesByEngagementCommandInput, ListPagesByEngagementCommandOutput } from "./commands/ListPagesByEngagementCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutContactPolicyCommandInput, PutContactPolicyCommandOutput } from "./commands/PutContactPolicyCommand";
import { SendActivationCodeCommandInput, SendActivationCodeCommandOutput } from "./commands/SendActivationCodeCommand";
import { StartEngagementCommandInput, StartEngagementCommandOutput } from "./commands/StartEngagementCommand";
import { StopEngagementCommandInput, StopEngagementCommandOutput } from "./commands/StopEngagementCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateContactChannelCommandInput, UpdateContactChannelCommandOutput } from "./commands/UpdateContactChannelCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p></p>
 */
export declare class SSMContacts extends SSMContactsClient {
    /**
     * <p>Used to acknowledge an engagement to a contact channel during an incident.</p>
     */
    acceptPage(args: AcceptPageCommandInput, options?: __HttpHandlerOptions): Promise<AcceptPageCommandOutput>;
    acceptPage(args: AcceptPageCommandInput, cb: (err: any, data?: AcceptPageCommandOutput) => void): void;
    acceptPage(args: AcceptPageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptPageCommandOutput) => void): void;
    /**
     * <p>Activates a contact's contact channel. Incident Manager can't engage a contact until
     *          the
     *          contact channel has been activated.</p>
     */
    activateContactChannel(args: ActivateContactChannelCommandInput, options?: __HttpHandlerOptions): Promise<ActivateContactChannelCommandOutput>;
    activateContactChannel(args: ActivateContactChannelCommandInput, cb: (err: any, data?: ActivateContactChannelCommandOutput) => void): void;
    activateContactChannel(args: ActivateContactChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ActivateContactChannelCommandOutput) => void): void;
    /**
     * <p>Contacts are either the contacts that Incident Manager engages during an incident or the
     *          escalation plans that Incident Manager uses to engage contacts in phases during an
     *          incident. </p>
     */
    createContact(args: CreateContactCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactCommandOutput>;
    createContact(args: CreateContactCommandInput, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
    createContact(args: CreateContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
    /**
     * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
     */
    createContactChannel(args: CreateContactChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactChannelCommandOutput>;
    createContactChannel(args: CreateContactChannelCommandInput, cb: (err: any, data?: CreateContactChannelCommandOutput) => void): void;
    createContactChannel(args: CreateContactChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContactChannelCommandOutput) => void): void;
    /**
     * <p>To no longer receive Incident Manager engagements to a contact channel, you can deactivate
     *          the channel.</p>
     */
    deactivateContactChannel(args: DeactivateContactChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeactivateContactChannelCommandOutput>;
    deactivateContactChannel(args: DeactivateContactChannelCommandInput, cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void): void;
    deactivateContactChannel(args: DeactivateContactChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void): void;
    /**
     * <p>To remove a contact from Incident Manager, you can delete the contact. Deleting a contact
     *          removes them from all escalation plans and related response plans. Deleting an escalation
     *          plan removes it from all related response plans. You will have to recreate the contact and
     *          its contact channels before you can use it again.</p>
     */
    deleteContact(args: DeleteContactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactCommandOutput>;
    deleteContact(args: DeleteContactCommandInput, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
    deleteContact(args: DeleteContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
    /**
     * <p>To no longer receive engagements on a contact channel, you can delete the channel from a
     *          contact. Deleting the contact channel removes it from the contact's engagement plan. If you
     *          delete the only contact channel for a contact, you won't be able to engage that contact
     *          during an incident.</p>
     */
    deleteContactChannel(args: DeleteContactChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactChannelCommandOutput>;
    deleteContactChannel(args: DeleteContactChannelCommandInput, cb: (err: any, data?: DeleteContactChannelCommandOutput) => void): void;
    deleteContactChannel(args: DeleteContactChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContactChannelCommandOutput) => void): void;
    /**
     * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
     *          Use this command to describe the engagement that occurred during an incident.</p>
     */
    describeEngagement(args: DescribeEngagementCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngagementCommandOutput>;
    describeEngagement(args: DescribeEngagementCommandInput, cb: (err: any, data?: DescribeEngagementCommandOutput) => void): void;
    describeEngagement(args: DescribeEngagementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngagementCommandOutput) => void): void;
    /**
     * <p>Lists details of the engagement to a contact channel.</p>
     */
    describePage(args: DescribePageCommandInput, options?: __HttpHandlerOptions): Promise<DescribePageCommandOutput>;
    describePage(args: DescribePageCommandInput, cb: (err: any, data?: DescribePageCommandOutput) => void): void;
    describePage(args: DescribePageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePageCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified contact or escalation plan.</p>
     */
    getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
    getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
    getContact(args: GetContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactCommandOutput) => void): void;
    /**
     * <p>List details about a specific contact channel.</p>
     */
    getContactChannel(args: GetContactChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetContactChannelCommandOutput>;
    getContactChannel(args: GetContactChannelCommandInput, cb: (err: any, data?: GetContactChannelCommandOutput) => void): void;
    getContactChannel(args: GetContactChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactChannelCommandOutput) => void): void;
    /**
     * <p>Retrieves the resource policies attached to the specified contact or escalation
     *          plan.</p>
     */
    getContactPolicy(args: GetContactPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetContactPolicyCommandOutput>;
    getContactPolicy(args: GetContactPolicyCommandInput, cb: (err: any, data?: GetContactPolicyCommandOutput) => void): void;
    getContactPolicy(args: GetContactPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactPolicyCommandOutput) => void): void;
    /**
     * <p>Lists all contact channels for the specified contact.</p>
     */
    listContactChannels(args: ListContactChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactChannelsCommandOutput>;
    listContactChannels(args: ListContactChannelsCommandInput, cb: (err: any, data?: ListContactChannelsCommandOutput) => void): void;
    listContactChannels(args: ListContactChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContactChannelsCommandOutput) => void): void;
    /**
     * <p>Lists all contacts and escalation plans in Incident Manager.</p>
     */
    listContacts(args: ListContactsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactsCommandOutput>;
    listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
    listContacts(args: ListContactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
    /**
     * <p>Lists all engagements that have happened in an incident.</p>
     */
    listEngagements(args: ListEngagementsCommandInput, options?: __HttpHandlerOptions): Promise<ListEngagementsCommandOutput>;
    listEngagements(args: ListEngagementsCommandInput, cb: (err: any, data?: ListEngagementsCommandOutput) => void): void;
    listEngagements(args: ListEngagementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEngagementsCommandOutput) => void): void;
    /**
     * <p>Lists all of the engagements to contact channels that have been acknowledged. </p>
     */
    listPageReceipts(args: ListPageReceiptsCommandInput, options?: __HttpHandlerOptions): Promise<ListPageReceiptsCommandOutput>;
    listPageReceipts(args: ListPageReceiptsCommandInput, cb: (err: any, data?: ListPageReceiptsCommandOutput) => void): void;
    listPageReceipts(args: ListPageReceiptsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPageReceiptsCommandOutput) => void): void;
    /**
     * <p>Lists the engagements to a contact's contact channels.</p>
     */
    listPagesByContact(args: ListPagesByContactCommandInput, options?: __HttpHandlerOptions): Promise<ListPagesByContactCommandOutput>;
    listPagesByContact(args: ListPagesByContactCommandInput, cb: (err: any, data?: ListPagesByContactCommandOutput) => void): void;
    listPagesByContact(args: ListPagesByContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPagesByContactCommandOutput) => void): void;
    /**
     * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
     */
    listPagesByEngagement(args: ListPagesByEngagementCommandInput, options?: __HttpHandlerOptions): Promise<ListPagesByEngagementCommandOutput>;
    listPagesByEngagement(args: ListPagesByEngagementCommandInput, cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void): void;
    listPagesByEngagement(args: ListPagesByEngagementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void): void;
    /**
     * <p>Lists the tags of an escalation plan or contact.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds a resource to the specified contact or escalation plan.</p>
     */
    putContactPolicy(args: PutContactPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutContactPolicyCommandOutput>;
    putContactPolicy(args: PutContactPolicyCommandInput, cb: (err: any, data?: PutContactPolicyCommandOutput) => void): void;
    putContactPolicy(args: PutContactPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutContactPolicyCommandOutput) => void): void;
    /**
     * <p>Sends an activation code to a contact channel. The contact can use this code to activate
     *          the contact channel in the console or with the <code>ActivateChannel</code> action.
     *          Incident Manager can't engage a contact channel until it has been activated.</p>
     */
    sendActivationCode(args: SendActivationCodeCommandInput, options?: __HttpHandlerOptions): Promise<SendActivationCodeCommandOutput>;
    sendActivationCode(args: SendActivationCodeCommandInput, cb: (err: any, data?: SendActivationCodeCommandOutput) => void): void;
    sendActivationCode(args: SendActivationCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendActivationCodeCommandOutput) => void): void;
    /**
     * <p>Starts an engagement to a contact or escalation plan. The engagement engages each
     *          contact specified in the incident.</p>
     */
    startEngagement(args: StartEngagementCommandInput, options?: __HttpHandlerOptions): Promise<StartEngagementCommandOutput>;
    startEngagement(args: StartEngagementCommandInput, cb: (err: any, data?: StartEngagementCommandOutput) => void): void;
    startEngagement(args: StartEngagementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartEngagementCommandOutput) => void): void;
    /**
     * <p>Stops an engagement before it finishes the final stage of the escalation plan or
     *          engagement plan. Further contacts aren't engaged.</p>
     */
    stopEngagement(args: StopEngagementCommandInput, options?: __HttpHandlerOptions): Promise<StopEngagementCommandOutput>;
    stopEngagement(args: StopEngagementCommandInput, cb: (err: any, data?: StopEngagementCommandOutput) => void): void;
    stopEngagement(args: StopEngagementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopEngagementCommandOutput) => void): void;
    /**
     * <p>Tags a contact or escalation plan. You can tag only contacts and escalation plans in the
     *          first region of your replication set. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from the specified resource. </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the contact or escalation plan specified. </p>
     */
    updateContact(args: UpdateContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactCommandOutput>;
    updateContact(args: UpdateContactCommandInput, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
    updateContact(args: UpdateContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
    /**
     * <p>Updates a contact's contact channel.</p>
     */
    updateContactChannel(args: UpdateContactChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactChannelCommandOutput>;
    updateContactChannel(args: UpdateContactChannelCommandInput, cb: (err: any, data?: UpdateContactChannelCommandOutput) => void): void;
    updateContactChannel(args: UpdateContactChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContactChannelCommandOutput) => void): void;
}
