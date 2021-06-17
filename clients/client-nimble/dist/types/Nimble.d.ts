import { NimbleClient } from "./NimbleClient";
import { AcceptEulasCommandInput, AcceptEulasCommandOutput } from "./commands/AcceptEulasCommand";
import { CreateLaunchProfileCommandInput, CreateLaunchProfileCommandOutput } from "./commands/CreateLaunchProfileCommand";
import { CreateStreamingImageCommandInput, CreateStreamingImageCommandOutput } from "./commands/CreateStreamingImageCommand";
import { CreateStreamingSessionCommandInput, CreateStreamingSessionCommandOutput } from "./commands/CreateStreamingSessionCommand";
import { CreateStreamingSessionStreamCommandInput, CreateStreamingSessionStreamCommandOutput } from "./commands/CreateStreamingSessionStreamCommand";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "./commands/CreateStudioCommand";
import { CreateStudioComponentCommandInput, CreateStudioComponentCommandOutput } from "./commands/CreateStudioComponentCommand";
import { DeleteLaunchProfileCommandInput, DeleteLaunchProfileCommandOutput } from "./commands/DeleteLaunchProfileCommand";
import { DeleteLaunchProfileMemberCommandInput, DeleteLaunchProfileMemberCommandOutput } from "./commands/DeleteLaunchProfileMemberCommand";
import { DeleteStreamingImageCommandInput, DeleteStreamingImageCommandOutput } from "./commands/DeleteStreamingImageCommand";
import { DeleteStreamingSessionCommandInput, DeleteStreamingSessionCommandOutput } from "./commands/DeleteStreamingSessionCommand";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "./commands/DeleteStudioCommand";
import { DeleteStudioComponentCommandInput, DeleteStudioComponentCommandOutput } from "./commands/DeleteStudioComponentCommand";
import { DeleteStudioMemberCommandInput, DeleteStudioMemberCommandOutput } from "./commands/DeleteStudioMemberCommand";
import { GetEulaCommandInput, GetEulaCommandOutput } from "./commands/GetEulaCommand";
import { GetLaunchProfileCommandInput, GetLaunchProfileCommandOutput } from "./commands/GetLaunchProfileCommand";
import { GetLaunchProfileDetailsCommandInput, GetLaunchProfileDetailsCommandOutput } from "./commands/GetLaunchProfileDetailsCommand";
import { GetLaunchProfileInitializationCommandInput, GetLaunchProfileInitializationCommandOutput } from "./commands/GetLaunchProfileInitializationCommand";
import { GetLaunchProfileMemberCommandInput, GetLaunchProfileMemberCommandOutput } from "./commands/GetLaunchProfileMemberCommand";
import { GetStreamingImageCommandInput, GetStreamingImageCommandOutput } from "./commands/GetStreamingImageCommand";
import { GetStreamingSessionCommandInput, GetStreamingSessionCommandOutput } from "./commands/GetStreamingSessionCommand";
import { GetStreamingSessionStreamCommandInput, GetStreamingSessionStreamCommandOutput } from "./commands/GetStreamingSessionStreamCommand";
import { GetStudioCommandInput, GetStudioCommandOutput } from "./commands/GetStudioCommand";
import { GetStudioComponentCommandInput, GetStudioComponentCommandOutput } from "./commands/GetStudioComponentCommand";
import { GetStudioMemberCommandInput, GetStudioMemberCommandOutput } from "./commands/GetStudioMemberCommand";
import { ListEulaAcceptancesCommandInput, ListEulaAcceptancesCommandOutput } from "./commands/ListEulaAcceptancesCommand";
import { ListEulasCommandInput, ListEulasCommandOutput } from "./commands/ListEulasCommand";
import { ListLaunchProfileMembersCommandInput, ListLaunchProfileMembersCommandOutput } from "./commands/ListLaunchProfileMembersCommand";
import { ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput } from "./commands/ListLaunchProfilesCommand";
import { ListStreamingImagesCommandInput, ListStreamingImagesCommandOutput } from "./commands/ListStreamingImagesCommand";
import { ListStreamingSessionsCommandInput, ListStreamingSessionsCommandOutput } from "./commands/ListStreamingSessionsCommand";
import { ListStudioComponentsCommandInput, ListStudioComponentsCommandOutput } from "./commands/ListStudioComponentsCommand";
import { ListStudioMembersCommandInput, ListStudioMembersCommandOutput } from "./commands/ListStudioMembersCommand";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutLaunchProfileMembersCommandInput, PutLaunchProfileMembersCommandOutput } from "./commands/PutLaunchProfileMembersCommand";
import { PutStudioMembersCommandInput, PutStudioMembersCommandOutput } from "./commands/PutStudioMembersCommand";
import { StartStudioSSOConfigurationRepairCommandInput, StartStudioSSOConfigurationRepairCommandOutput } from "./commands/StartStudioSSOConfigurationRepairCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLaunchProfileCommandInput, UpdateLaunchProfileCommandOutput } from "./commands/UpdateLaunchProfileCommand";
import { UpdateLaunchProfileMemberCommandInput, UpdateLaunchProfileMemberCommandOutput } from "./commands/UpdateLaunchProfileMemberCommand";
import { UpdateStreamingImageCommandInput, UpdateStreamingImageCommandOutput } from "./commands/UpdateStreamingImageCommand";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "./commands/UpdateStudioCommand";
import { UpdateStudioComponentCommandInput, UpdateStudioComponentCommandOutput } from "./commands/UpdateStudioComponentCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
export declare class Nimble extends NimbleClient {
    /**
     * <p>Accept EULAs.</p>
     */
    acceptEulas(args: AcceptEulasCommandInput, options?: __HttpHandlerOptions): Promise<AcceptEulasCommandOutput>;
    acceptEulas(args: AcceptEulasCommandInput, cb: (err: any, data?: AcceptEulasCommandOutput) => void): void;
    acceptEulas(args: AcceptEulasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptEulasCommandOutput) => void): void;
    /**
     * <p>Create a launch profile.</p>
     */
    createLaunchProfile(args: CreateLaunchProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateLaunchProfileCommandOutput>;
    createLaunchProfile(args: CreateLaunchProfileCommandInput, cb: (err: any, data?: CreateLaunchProfileCommandOutput) => void): void;
    createLaunchProfile(args: CreateLaunchProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLaunchProfileCommandOutput) => void): void;
    /**
     * <p>Creates a streaming image resource in a studio.</p>
     */
    createStreamingImage(args: CreateStreamingImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamingImageCommandOutput>;
    createStreamingImage(args: CreateStreamingImageCommandInput, cb: (err: any, data?: CreateStreamingImageCommandOutput) => void): void;
    createStreamingImage(args: CreateStreamingImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamingImageCommandOutput) => void): void;
    /**
     * <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
     */
    createStreamingSession(args: CreateStreamingSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamingSessionCommandOutput>;
    createStreamingSession(args: CreateStreamingSessionCommandInput, cb: (err: any, data?: CreateStreamingSessionCommandOutput) => void): void;
    createStreamingSession(args: CreateStreamingSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamingSessionCommandOutput) => void): void;
    /**
     * <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
     */
    createStreamingSessionStream(args: CreateStreamingSessionStreamCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamingSessionStreamCommandOutput>;
    createStreamingSessionStream(args: CreateStreamingSessionStreamCommandInput, cb: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void): void;
    createStreamingSessionStream(args: CreateStreamingSessionStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamingSessionStreamCommandOutput) => void): void;
    /**
     * <p>Create a new Studio.</p> <p>When creating a Studio, two IAM roles must be provided: the admin role and the user Role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly.</p> <p>The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the StudioEncryptionConfiguration.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an AWS KMS key. By default, this key is owned by AWS and managed on your behalf. You may provide your own AWS KMS key when calling CreateStudio to encrypt this data using a key you own and manage.</p> <p>When providing an AWS KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
     */
    createStudio(args: CreateStudioCommandInput, options?: __HttpHandlerOptions): Promise<CreateStudioCommandOutput>;
    createStudio(args: CreateStudioCommandInput, cb: (err: any, data?: CreateStudioCommandOutput) => void): void;
    createStudio(args: CreateStudioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStudioCommandOutput) => void): void;
    /**
     * <p>Creates a studio component resource.</p>
     */
    createStudioComponent(args: CreateStudioComponentCommandInput, options?: __HttpHandlerOptions): Promise<CreateStudioComponentCommandOutput>;
    createStudioComponent(args: CreateStudioComponentCommandInput, cb: (err: any, data?: CreateStudioComponentCommandOutput) => void): void;
    createStudioComponent(args: CreateStudioComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStudioComponentCommandOutput) => void): void;
    /**
     * <p>Permanently delete a launch profile.</p>
     */
    deleteLaunchProfile(args: DeleteLaunchProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLaunchProfileCommandOutput>;
    deleteLaunchProfile(args: DeleteLaunchProfileCommandInput, cb: (err: any, data?: DeleteLaunchProfileCommandOutput) => void): void;
    deleteLaunchProfile(args: DeleteLaunchProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLaunchProfileCommandOutput) => void): void;
    /**
     * <p>Delete a user from launch profile membership.</p>
     */
    deleteLaunchProfileMember(args: DeleteLaunchProfileMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLaunchProfileMemberCommandOutput>;
    deleteLaunchProfileMember(args: DeleteLaunchProfileMemberCommandInput, cb: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void): void;
    deleteLaunchProfileMember(args: DeleteLaunchProfileMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLaunchProfileMemberCommandOutput) => void): void;
    /**
     * <p>Delete streaming image.</p>
     */
    deleteStreamingImage(args: DeleteStreamingImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStreamingImageCommandOutput>;
    deleteStreamingImage(args: DeleteStreamingImageCommandInput, cb: (err: any, data?: DeleteStreamingImageCommandOutput) => void): void;
    deleteStreamingImage(args: DeleteStreamingImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStreamingImageCommandOutput) => void): void;
    /**
     * <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
     */
    deleteStreamingSession(args: DeleteStreamingSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStreamingSessionCommandOutput>;
    deleteStreamingSession(args: DeleteStreamingSessionCommandInput, cb: (err: any, data?: DeleteStreamingSessionCommandOutput) => void): void;
    deleteStreamingSession(args: DeleteStreamingSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStreamingSessionCommandOutput) => void): void;
    /**
     * <p>Delete a studio resource.</p>
     */
    deleteStudio(args: DeleteStudioCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStudioCommandOutput>;
    deleteStudio(args: DeleteStudioCommandInput, cb: (err: any, data?: DeleteStudioCommandOutput) => void): void;
    deleteStudio(args: DeleteStudioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStudioCommandOutput) => void): void;
    /**
     * <p>Deletes a studio component resource.</p>
     */
    deleteStudioComponent(args: DeleteStudioComponentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStudioComponentCommandOutput>;
    deleteStudioComponent(args: DeleteStudioComponentCommandInput, cb: (err: any, data?: DeleteStudioComponentCommandOutput) => void): void;
    deleteStudioComponent(args: DeleteStudioComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStudioComponentCommandOutput) => void): void;
    /**
     * <p>Delete a user from studio membership.</p>
     */
    deleteStudioMember(args: DeleteStudioMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStudioMemberCommandOutput>;
    deleteStudioMember(args: DeleteStudioMemberCommandInput, cb: (err: any, data?: DeleteStudioMemberCommandOutput) => void): void;
    deleteStudioMember(args: DeleteStudioMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStudioMemberCommandOutput) => void): void;
    /**
     * <p>Get Eula.</p>
     */
    getEula(args: GetEulaCommandInput, options?: __HttpHandlerOptions): Promise<GetEulaCommandOutput>;
    getEula(args: GetEulaCommandInput, cb: (err: any, data?: GetEulaCommandOutput) => void): void;
    getEula(args: GetEulaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEulaCommandOutput) => void): void;
    /**
     * <p>Get a launch profile.</p>
     */
    getLaunchProfile(args: GetLaunchProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchProfileCommandOutput>;
    getLaunchProfile(args: GetLaunchProfileCommandInput, cb: (err: any, data?: GetLaunchProfileCommandOutput) => void): void;
    getLaunchProfile(args: GetLaunchProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLaunchProfileCommandOutput) => void): void;
    /**
     * <p>Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.</p>
     */
    getLaunchProfileDetails(args: GetLaunchProfileDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchProfileDetailsCommandOutput>;
    getLaunchProfileDetails(args: GetLaunchProfileDetailsCommandInput, cb: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void): void;
    getLaunchProfileDetails(args: GetLaunchProfileDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLaunchProfileDetailsCommandOutput) => void): void;
    /**
     * <p>Get a launch profile initialization.</p>
     */
    getLaunchProfileInitialization(args: GetLaunchProfileInitializationCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchProfileInitializationCommandOutput>;
    getLaunchProfileInitialization(args: GetLaunchProfileInitializationCommandInput, cb: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void): void;
    getLaunchProfileInitialization(args: GetLaunchProfileInitializationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLaunchProfileInitializationCommandOutput) => void): void;
    /**
     * <p>Get a user persona in launch profile membership.</p>
     */
    getLaunchProfileMember(args: GetLaunchProfileMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchProfileMemberCommandOutput>;
    getLaunchProfileMember(args: GetLaunchProfileMemberCommandInput, cb: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void): void;
    getLaunchProfileMember(args: GetLaunchProfileMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLaunchProfileMemberCommandOutput) => void): void;
    /**
     * <p>Get streaming image.</p>
     */
    getStreamingImage(args: GetStreamingImageCommandInput, options?: __HttpHandlerOptions): Promise<GetStreamingImageCommandOutput>;
    getStreamingImage(args: GetStreamingImageCommandInput, cb: (err: any, data?: GetStreamingImageCommandOutput) => void): void;
    getStreamingImage(args: GetStreamingImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStreamingImageCommandOutput) => void): void;
    /**
     * <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
     */
    getStreamingSession(args: GetStreamingSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetStreamingSessionCommandOutput>;
    getStreamingSession(args: GetStreamingSessionCommandInput, cb: (err: any, data?: GetStreamingSessionCommandOutput) => void): void;
    getStreamingSession(args: GetStreamingSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStreamingSessionCommandOutput) => void): void;
    /**
     * <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
     */
    getStreamingSessionStream(args: GetStreamingSessionStreamCommandInput, options?: __HttpHandlerOptions): Promise<GetStreamingSessionStreamCommandOutput>;
    getStreamingSessionStream(args: GetStreamingSessionStreamCommandInput, cb: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void): void;
    getStreamingSessionStream(args: GetStreamingSessionStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStreamingSessionStreamCommandOutput) => void): void;
    /**
     * <p>Get a Studio resource.</p>
     */
    getStudio(args: GetStudioCommandInput, options?: __HttpHandlerOptions): Promise<GetStudioCommandOutput>;
    getStudio(args: GetStudioCommandInput, cb: (err: any, data?: GetStudioCommandOutput) => void): void;
    getStudio(args: GetStudioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStudioCommandOutput) => void): void;
    /**
     * <p>Gets a studio component resource.</p>
     */
    getStudioComponent(args: GetStudioComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetStudioComponentCommandOutput>;
    getStudioComponent(args: GetStudioComponentCommandInput, cb: (err: any, data?: GetStudioComponentCommandOutput) => void): void;
    getStudioComponent(args: GetStudioComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStudioComponentCommandOutput) => void): void;
    /**
     * <p>Get a user's membership in a studio.</p>
     */
    getStudioMember(args: GetStudioMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetStudioMemberCommandOutput>;
    getStudioMember(args: GetStudioMemberCommandInput, cb: (err: any, data?: GetStudioMemberCommandOutput) => void): void;
    getStudioMember(args: GetStudioMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStudioMemberCommandOutput) => void): void;
    /**
     * <p>List Eula Acceptances.</p>
     */
    listEulaAcceptances(args: ListEulaAcceptancesCommandInput, options?: __HttpHandlerOptions): Promise<ListEulaAcceptancesCommandOutput>;
    listEulaAcceptances(args: ListEulaAcceptancesCommandInput, cb: (err: any, data?: ListEulaAcceptancesCommandOutput) => void): void;
    listEulaAcceptances(args: ListEulaAcceptancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEulaAcceptancesCommandOutput) => void): void;
    /**
     * <p>List Eulas.</p>
     */
    listEulas(args: ListEulasCommandInput, options?: __HttpHandlerOptions): Promise<ListEulasCommandOutput>;
    listEulas(args: ListEulasCommandInput, cb: (err: any, data?: ListEulasCommandOutput) => void): void;
    listEulas(args: ListEulasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEulasCommandOutput) => void): void;
    /**
     * <p>Get all users in a given launch profile membership.</p>
     */
    listLaunchProfileMembers(args: ListLaunchProfileMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListLaunchProfileMembersCommandOutput>;
    listLaunchProfileMembers(args: ListLaunchProfileMembersCommandInput, cb: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void): void;
    listLaunchProfileMembers(args: ListLaunchProfileMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLaunchProfileMembersCommandOutput) => void): void;
    /**
     * <p>List all the launch profiles a studio.</p>
     */
    listLaunchProfiles(args: ListLaunchProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListLaunchProfilesCommandOutput>;
    listLaunchProfiles(args: ListLaunchProfilesCommandInput, cb: (err: any, data?: ListLaunchProfilesCommandOutput) => void): void;
    listLaunchProfiles(args: ListLaunchProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLaunchProfilesCommandOutput) => void): void;
    /**
     * <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by AWS, as well as streaming images that you have created in your studio.</p>
     */
    listStreamingImages(args: ListStreamingImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamingImagesCommandOutput>;
    listStreamingImages(args: ListStreamingImagesCommandInput, cb: (err: any, data?: ListStreamingImagesCommandOutput) => void): void;
    listStreamingImages(args: ListStreamingImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStreamingImagesCommandOutput) => void): void;
    /**
     * <p>Lists the streaming image resources in a studio.</p>
     */
    listStreamingSessions(args: ListStreamingSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamingSessionsCommandOutput>;
    listStreamingSessions(args: ListStreamingSessionsCommandInput, cb: (err: any, data?: ListStreamingSessionsCommandOutput) => void): void;
    listStreamingSessions(args: ListStreamingSessionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStreamingSessionsCommandOutput) => void): void;
    /**
     * <p>Lists the StudioComponents in a studio.</p>
     */
    listStudioComponents(args: ListStudioComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListStudioComponentsCommandOutput>;
    listStudioComponents(args: ListStudioComponentsCommandInput, cb: (err: any, data?: ListStudioComponentsCommandOutput) => void): void;
    listStudioComponents(args: ListStudioComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStudioComponentsCommandOutput) => void): void;
    /**
     * <p>Get all users in a given studio membership.</p>
     */
    listStudioMembers(args: ListStudioMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListStudioMembersCommandOutput>;
    listStudioMembers(args: ListStudioMembersCommandInput, cb: (err: any, data?: ListStudioMembersCommandOutput) => void): void;
    listStudioMembers(args: ListStudioMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStudioMembersCommandOutput) => void): void;
    /**
     * <p>List studios in your AWS account in the requested AWS Region.</p>
     */
    listStudios(args: ListStudiosCommandInput, options?: __HttpHandlerOptions): Promise<ListStudiosCommandOutput>;
    listStudios(args: ListStudiosCommandInput, cb: (err: any, data?: ListStudiosCommandOutput) => void): void;
    listStudios(args: ListStudiosCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStudiosCommandOutput) => void): void;
    /**
     * <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Add/update users with given persona to launch profile membership.</p>
     */
    putLaunchProfileMembers(args: PutLaunchProfileMembersCommandInput, options?: __HttpHandlerOptions): Promise<PutLaunchProfileMembersCommandOutput>;
    putLaunchProfileMembers(args: PutLaunchProfileMembersCommandInput, cb: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void): void;
    putLaunchProfileMembers(args: PutLaunchProfileMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLaunchProfileMembersCommandOutput) => void): void;
    /**
     * <p>Add/update users with given persona to studio membership.</p>
     */
    putStudioMembers(args: PutStudioMembersCommandInput, options?: __HttpHandlerOptions): Promise<PutStudioMembersCommandOutput>;
    putStudioMembers(args: PutStudioMembersCommandInput, cb: (err: any, data?: PutStudioMembersCommandOutput) => void): void;
    putStudioMembers(args: PutStudioMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutStudioMembersCommandOutput) => void): void;
    /**
     * <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid AWS SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid AWS SSO configuration currently associated with it, then a new AWS SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the AWS SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
     */
    startStudioSSOConfigurationRepair(args: StartStudioSSOConfigurationRepairCommandInput, options?: __HttpHandlerOptions): Promise<StartStudioSSOConfigurationRepairCommandOutput>;
    startStudioSSOConfigurationRepair(args: StartStudioSSOConfigurationRepairCommandInput, cb: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void): void;
    startStudioSSOConfigurationRepair(args: StartStudioSSOConfigurationRepairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartStudioSSOConfigurationRepairCommandOutput) => void): void;
    /**
     * <p>Creates tags for a resource, given its ARN.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes the tags for a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update a launch profile.</p>
     */
    updateLaunchProfile(args: UpdateLaunchProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLaunchProfileCommandOutput>;
    updateLaunchProfile(args: UpdateLaunchProfileCommandInput, cb: (err: any, data?: UpdateLaunchProfileCommandOutput) => void): void;
    updateLaunchProfile(args: UpdateLaunchProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLaunchProfileCommandOutput) => void): void;
    /**
     * <p>Update a user persona in launch profile membership.</p>
     */
    updateLaunchProfileMember(args: UpdateLaunchProfileMemberCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLaunchProfileMemberCommandOutput>;
    updateLaunchProfileMember(args: UpdateLaunchProfileMemberCommandInput, cb: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void): void;
    updateLaunchProfileMember(args: UpdateLaunchProfileMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLaunchProfileMemberCommandOutput) => void): void;
    /**
     * <p>Update streaming image.</p>
     */
    updateStreamingImage(args: UpdateStreamingImageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStreamingImageCommandOutput>;
    updateStreamingImage(args: UpdateStreamingImageCommandInput, cb: (err: any, data?: UpdateStreamingImageCommandOutput) => void): void;
    updateStreamingImage(args: UpdateStreamingImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStreamingImageCommandOutput) => void): void;
    /**
     * <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
     */
    updateStudio(args: UpdateStudioCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStudioCommandOutput>;
    updateStudio(args: UpdateStudioCommandInput, cb: (err: any, data?: UpdateStudioCommandOutput) => void): void;
    updateStudio(args: UpdateStudioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStudioCommandOutput) => void): void;
    /**
     * <p>Updates a studio component resource.</p>
     */
    updateStudioComponent(args: UpdateStudioComponentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStudioComponentCommandOutput>;
    updateStudioComponent(args: UpdateStudioComponentCommandInput, cb: (err: any, data?: UpdateStudioComponentCommandOutput) => void): void;
    updateStudioComponent(args: UpdateStudioComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStudioComponentCommandOutput) => void): void;
}
