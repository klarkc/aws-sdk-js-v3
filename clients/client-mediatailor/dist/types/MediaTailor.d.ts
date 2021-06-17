import { MediaTailorClient } from "./MediaTailorClient";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateProgramCommandInput, CreateProgramCommandOutput } from "./commands/CreateProgramCommand";
import { CreateSourceLocationCommandInput, CreateSourceLocationCommandOutput } from "./commands/CreateSourceLocationCommand";
import { CreateVodSourceCommandInput, CreateVodSourceCommandOutput } from "./commands/CreateVodSourceCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteChannelPolicyCommandInput, DeleteChannelPolicyCommandOutput } from "./commands/DeleteChannelPolicyCommand";
import { DeletePlaybackConfigurationCommandInput, DeletePlaybackConfigurationCommandOutput } from "./commands/DeletePlaybackConfigurationCommand";
import { DeleteProgramCommandInput, DeleteProgramCommandOutput } from "./commands/DeleteProgramCommand";
import { DeleteSourceLocationCommandInput, DeleteSourceLocationCommandOutput } from "./commands/DeleteSourceLocationCommand";
import { DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput } from "./commands/DeleteVodSourceCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeProgramCommandInput, DescribeProgramCommandOutput } from "./commands/DescribeProgramCommand";
import { DescribeSourceLocationCommandInput, DescribeSourceLocationCommandOutput } from "./commands/DescribeSourceLocationCommand";
import { DescribeVodSourceCommandInput, DescribeVodSourceCommandOutput } from "./commands/DescribeVodSourceCommand";
import { GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput } from "./commands/GetChannelPolicyCommand";
import { GetChannelScheduleCommandInput, GetChannelScheduleCommandOutput } from "./commands/GetChannelScheduleCommand";
import { GetPlaybackConfigurationCommandInput, GetPlaybackConfigurationCommandOutput } from "./commands/GetPlaybackConfigurationCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListPlaybackConfigurationsCommandInput, ListPlaybackConfigurationsCommandOutput } from "./commands/ListPlaybackConfigurationsCommand";
import { ListSourceLocationsCommandInput, ListSourceLocationsCommandOutput } from "./commands/ListSourceLocationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListVodSourcesCommandInput, ListVodSourcesCommandOutput } from "./commands/ListVodSourcesCommand";
import { PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput } from "./commands/PutChannelPolicyCommand";
import { PutPlaybackConfigurationCommandInput, PutPlaybackConfigurationCommandOutput } from "./commands/PutPlaybackConfigurationCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateSourceLocationCommandInput, UpdateSourceLocationCommandOutput } from "./commands/UpdateSourceLocationCommand";
import { UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput } from "./commands/UpdateVodSourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p> <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 */
export declare class MediaTailor extends MediaTailorClient {
    /**
     * <p>Creates a channel.</p>
     */
    createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
    createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    createChannel(args: CreateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    /**
     * <p>Creates a program.</p>
     */
    createProgram(args: CreateProgramCommandInput, options?: __HttpHandlerOptions): Promise<CreateProgramCommandOutput>;
    createProgram(args: CreateProgramCommandInput, cb: (err: any, data?: CreateProgramCommandOutput) => void): void;
    createProgram(args: CreateProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProgramCommandOutput) => void): void;
    /**
     * <p>Creates a source location on a specific channel.</p>
     */
    createSourceLocation(args: CreateSourceLocationCommandInput, options?: __HttpHandlerOptions): Promise<CreateSourceLocationCommandOutput>;
    createSourceLocation(args: CreateSourceLocationCommandInput, cb: (err: any, data?: CreateSourceLocationCommandOutput) => void): void;
    createSourceLocation(args: CreateSourceLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSourceLocationCommandOutput) => void): void;
    /**
     * <p>Creates name for a specific VOD source in a source location.</p>
     */
    createVodSource(args: CreateVodSourceCommandInput, options?: __HttpHandlerOptions): Promise<CreateVodSourceCommandOutput>;
    createVodSource(args: CreateVodSourceCommandInput, cb: (err: any, data?: CreateVodSourceCommandOutput) => void): void;
    createVodSource(args: CreateVodSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVodSourceCommandOutput) => void): void;
    /**
     * <p>Deletes a channel. You must stop the channel before it can be deleted.</p>
     */
    deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
    deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    deleteChannel(args: DeleteChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    /**
     * <p>Deletes a channel's IAM policy.</p>
     */
    deleteChannelPolicy(args: DeleteChannelPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelPolicyCommandOutput>;
    deleteChannelPolicy(args: DeleteChannelPolicyCommandInput, cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void): void;
    deleteChannelPolicy(args: DeleteChannelPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the playback configuration for the specified name.</p>
     */
    deletePlaybackConfiguration(args: DeletePlaybackConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeletePlaybackConfigurationCommandOutput>;
    deletePlaybackConfiguration(args: DeletePlaybackConfigurationCommandInput, cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void): void;
    deletePlaybackConfiguration(args: DeletePlaybackConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes a specific program on a specific channel.</p>
     */
    deleteProgram(args: DeleteProgramCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProgramCommandOutput>;
    deleteProgram(args: DeleteProgramCommandInput, cb: (err: any, data?: DeleteProgramCommandOutput) => void): void;
    deleteProgram(args: DeleteProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProgramCommandOutput) => void): void;
    /**
     * <p>Deletes a source location on a specific channel.</p>
     */
    deleteSourceLocation(args: DeleteSourceLocationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSourceLocationCommandOutput>;
    deleteSourceLocation(args: DeleteSourceLocationCommandInput, cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void): void;
    deleteSourceLocation(args: DeleteSourceLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void): void;
    /**
     * <p>Deletes a specific VOD source in a specific source location.</p>
     */
    deleteVodSource(args: DeleteVodSourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVodSourceCommandOutput>;
    deleteVodSource(args: DeleteVodSourceCommandInput, cb: (err: any, data?: DeleteVodSourceCommandOutput) => void): void;
    deleteVodSource(args: DeleteVodSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVodSourceCommandOutput) => void): void;
    /**
     * <p>Describes the properties of a specific channel.</p>
     */
    describeChannel(args: DescribeChannelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeChannelCommandOutput>;
    describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    describeChannel(args: DescribeChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    /**
     * <p>Retrieves the properties of the requested program.</p>
     */
    describeProgram(args: DescribeProgramCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProgramCommandOutput>;
    describeProgram(args: DescribeProgramCommandInput, cb: (err: any, data?: DescribeProgramCommandOutput) => void): void;
    describeProgram(args: DescribeProgramCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProgramCommandOutput) => void): void;
    /**
     * <p>Retrieves the properties of the requested source location.</p>
     */
    describeSourceLocation(args: DescribeSourceLocationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSourceLocationCommandOutput>;
    describeSourceLocation(args: DescribeSourceLocationCommandInput, cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void): void;
    describeSourceLocation(args: DescribeSourceLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void): void;
    /**
     * <p>Provides details about a specific VOD source in a specific source location.</p>
     */
    describeVodSource(args: DescribeVodSourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVodSourceCommandOutput>;
    describeVodSource(args: DescribeVodSourceCommandInput, cb: (err: any, data?: DescribeVodSourceCommandOutput) => void): void;
    describeVodSource(args: DescribeVodSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVodSourceCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a channel's IAM policy.</p>
     */
    getChannelPolicy(args: GetChannelPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelPolicyCommandOutput>;
    getChannelPolicy(args: GetChannelPolicyCommandInput, cb: (err: any, data?: GetChannelPolicyCommandOutput) => void): void;
    getChannelPolicy(args: GetChannelPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetChannelPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about your channel's schedule.</p>
     */
    getChannelSchedule(args: GetChannelScheduleCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelScheduleCommandOutput>;
    getChannelSchedule(args: GetChannelScheduleCommandInput, cb: (err: any, data?: GetChannelScheduleCommandOutput) => void): void;
    getChannelSchedule(args: GetChannelScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetChannelScheduleCommandOutput) => void): void;
    /**
     * <p>Returns the playback configuration for the specified name.</p>
     */
    getPlaybackConfiguration(args: GetPlaybackConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetPlaybackConfigurationCommandOutput>;
    getPlaybackConfiguration(args: GetPlaybackConfigurationCommandInput, cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void): void;
    getPlaybackConfiguration(args: GetPlaybackConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of channels that are associated with this account.</p>
     */
    listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
    listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    listChannels(args: ListChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful.</p>
     */
    listPlaybackConfigurations(args: ListPlaybackConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListPlaybackConfigurationsCommandOutput>;
    listPlaybackConfigurations(args: ListPlaybackConfigurationsCommandInput, cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void): void;
    listPlaybackConfigurations(args: ListPlaybackConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of source locations.</p>
     */
    listSourceLocations(args: ListSourceLocationsCommandInput, options?: __HttpHandlerOptions): Promise<ListSourceLocationsCommandOutput>;
    listSourceLocations(args: ListSourceLocationsCommandInput, cb: (err: any, data?: ListSourceLocationsCommandOutput) => void): void;
    listSourceLocations(args: ListSourceLocationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSourceLocationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags assigned to the specified playback configuration resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists all the VOD sources in a source location.</p>
     */
    listVodSources(args: ListVodSourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListVodSourcesCommandOutput>;
    listVodSources(args: ListVodSourcesCommandInput, cb: (err: any, data?: ListVodSourcesCommandOutput) => void): void;
    listVodSources(args: ListVodSourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVodSourcesCommandOutput) => void): void;
    /**
     * <p>Creates an IAM policy for the channel.</p>
     */
    putChannelPolicy(args: PutChannelPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutChannelPolicyCommandOutput>;
    putChannelPolicy(args: PutChannelPolicyCommandInput, cb: (err: any, data?: PutChannelPolicyCommandOutput) => void): void;
    putChannelPolicy(args: PutChannelPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutChannelPolicyCommandOutput) => void): void;
    /**
     * <p>Adds a new playback configuration to AWS Elemental MediaTailor.</p>
     */
    putPlaybackConfiguration(args: PutPlaybackConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutPlaybackConfigurationCommandOutput>;
    putPlaybackConfiguration(args: PutPlaybackConfigurationCommandInput, cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void): void;
    putPlaybackConfiguration(args: PutPlaybackConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void): void;
    /**
     * <p>Starts a specific channel.</p>
     */
    startChannel(args: StartChannelCommandInput, options?: __HttpHandlerOptions): Promise<StartChannelCommandOutput>;
    startChannel(args: StartChannelCommandInput, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
    startChannel(args: StartChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
    /**
     * <p>Stops a specific channel.</p>
     */
    stopChannel(args: StopChannelCommandInput, options?: __HttpHandlerOptions): Promise<StopChannelCommandOutput>;
    stopChannel(args: StopChannelCommandInput, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
    stopChannel(args: StopChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
    /**
     * <p>Adds tags to the specified playback configuration resource. You can specify one or more tags to add.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from the specified playback configuration resource. You can specify one or more tags to remove.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing channel.</p>
     */
    updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
    updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    updateChannel(args: UpdateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    /**
     * <p>Updates a source location on a specific channel.</p>
     */
    updateSourceLocation(args: UpdateSourceLocationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSourceLocationCommandOutput>;
    updateSourceLocation(args: UpdateSourceLocationCommandInput, cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void): void;
    updateSourceLocation(args: UpdateSourceLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void): void;
    /**
     * <p>Updates a specific VOD source in a specific source location.</p>
     */
    updateVodSource(args: UpdateVodSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVodSourceCommandOutput>;
    updateVodSource(args: UpdateVodSourceCommandInput, cb: (err: any, data?: UpdateVodSourceCommandOutput) => void): void;
    updateVodSource(args: UpdateVodSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVodSourceCommandOutput) => void): void;
}
