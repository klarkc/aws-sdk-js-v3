import { AssociateFleetCommandInput, AssociateFleetCommandOutput } from "../commands/AssociateFleetCommand";
import {
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "../commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "../commands/BatchDisassociateUserStackCommand";
import { CopyImageCommandInput, CopyImageCommandOutput } from "../commands/CopyImageCommand";
import {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "../commands/CreateDirectoryConfigCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import { CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput } from "../commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "../commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "../commands/CreateStackCommand";
import { CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput } from "../commands/CreateStreamingURLCommand";
import { CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput } from "../commands/CreateUpdatedImageCommand";
import {
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "../commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "../commands/DeleteDirectoryConfigCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import { DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput } from "../commands/DeleteImageBuilderCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "../commands/DeleteImagePermissionsCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "../commands/DeleteStackCommand";
import {
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "../commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "../commands/DescribeDirectoryConfigsCommand";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "../commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "../commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "../commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "../commands/DescribeSessionsCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import {
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "../commands/DescribeUsageReportSubscriptionsCommand";
import {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "../commands/DescribeUserStackAssociationsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "../commands/DisableUserCommand";
import { DisassociateFleetCommandInput, DisassociateFleetCommandOutput } from "../commands/DisassociateFleetCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "../commands/EnableUserCommand";
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "../commands/ExpireSessionCommand";
import {
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "../commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "../commands/ListAssociatedStacksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartFleetCommandInput, StartFleetCommandOutput } from "../commands/StartFleetCommand";
import { StartImageBuilderCommandInput, StartImageBuilderCommandOutput } from "../commands/StartImageBuilderCommand";
import { StopFleetCommandInput, StopFleetCommandOutput } from "../commands/StopFleetCommand";
import { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "../commands/StopImageBuilderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "../commands/UpdateDirectoryConfigCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "../commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "../commands/UpdateImagePermissionsCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "../commands/UpdateStackCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AssociateFleetCommand: (
  input: AssociateFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchAssociateUserStackCommand: (
  input: BatchAssociateUserStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchDisassociateUserStackCommand: (
  input: BatchDisassociateUserStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CopyImageCommand: (
  input: CopyImageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateDirectoryConfigCommand: (
  input: CreateDirectoryConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateFleetCommand: (
  input: CreateFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateImageBuilderCommand: (
  input: CreateImageBuilderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateImageBuilderStreamingURLCommand: (
  input: CreateImageBuilderStreamingURLCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateStackCommand: (
  input: CreateStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateStreamingURLCommand: (
  input: CreateStreamingURLCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateUpdatedImageCommand: (
  input: CreateUpdatedImageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateUsageReportSubscriptionCommand: (
  input: CreateUsageReportSubscriptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateUserCommand: (
  input: CreateUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteDirectoryConfigCommand: (
  input: DeleteDirectoryConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteFleetCommand: (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteImageCommand: (
  input: DeleteImageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteImageBuilderCommand: (
  input: DeleteImageBuilderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteImagePermissionsCommand: (
  input: DeleteImagePermissionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteStackCommand: (
  input: DeleteStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteUsageReportSubscriptionCommand: (
  input: DeleteUsageReportSubscriptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteUserCommand: (
  input: DeleteUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeDirectoryConfigsCommand: (
  input: DescribeDirectoryConfigsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeFleetsCommand: (
  input: DescribeFleetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeImageBuildersCommand: (
  input: DescribeImageBuildersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeImagePermissionsCommand: (
  input: DescribeImagePermissionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeImagesCommand: (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeSessionsCommand: (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeStacksCommand: (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeUsageReportSubscriptionsCommand: (
  input: DescribeUsageReportSubscriptionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeUsersCommand: (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeUserStackAssociationsCommand: (
  input: DescribeUserStackAssociationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisableUserCommand: (
  input: DisableUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateFleetCommand: (
  input: DisassociateFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1EnableUserCommand: (
  input: EnableUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ExpireSessionCommand: (
  input: ExpireSessionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListAssociatedFleetsCommand: (
  input: ListAssociatedFleetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListAssociatedStacksCommand: (
  input: ListAssociatedStacksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartFleetCommand: (
  input: StartFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartImageBuilderCommand: (
  input: StartImageBuilderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopFleetCommand: (
  input: StopFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopImageBuilderCommand: (
  input: StopImageBuilderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateDirectoryConfigCommand: (
  input: UpdateDirectoryConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateFleetCommand: (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateImagePermissionsCommand: (
  input: UpdateImagePermissionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateStackCommand: (
  input: UpdateStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AssociateFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateFleetCommandOutput>;
export declare const deserializeAws_json1_1BatchAssociateUserStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchAssociateUserStackCommandOutput>;
export declare const deserializeAws_json1_1BatchDisassociateUserStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchDisassociateUserStackCommandOutput>;
export declare const deserializeAws_json1_1CopyImageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CopyImageCommandOutput>;
export declare const deserializeAws_json1_1CreateDirectoryConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDirectoryConfigCommandOutput>;
export declare const deserializeAws_json1_1CreateFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateFleetCommandOutput>;
export declare const deserializeAws_json1_1CreateImageBuilderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateImageBuilderCommandOutput>;
export declare const deserializeAws_json1_1CreateImageBuilderStreamingURLCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateImageBuilderStreamingURLCommandOutput>;
export declare const deserializeAws_json1_1CreateStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStackCommandOutput>;
export declare const deserializeAws_json1_1CreateStreamingURLCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStreamingURLCommandOutput>;
export declare const deserializeAws_json1_1CreateUpdatedImageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUpdatedImageCommandOutput>;
export declare const deserializeAws_json1_1CreateUsageReportSubscriptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUsageReportSubscriptionCommandOutput>;
export declare const deserializeAws_json1_1CreateUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserCommandOutput>;
export declare const deserializeAws_json1_1DeleteDirectoryConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDirectoryConfigCommandOutput>;
export declare const deserializeAws_json1_1DeleteFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteFleetCommandOutput>;
export declare const deserializeAws_json1_1DeleteImageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteImageCommandOutput>;
export declare const deserializeAws_json1_1DeleteImageBuilderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteImageBuilderCommandOutput>;
export declare const deserializeAws_json1_1DeleteImagePermissionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteImagePermissionsCommandOutput>;
export declare const deserializeAws_json1_1DeleteStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteStackCommandOutput>;
export declare const deserializeAws_json1_1DeleteUsageReportSubscriptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUsageReportSubscriptionCommandOutput>;
export declare const deserializeAws_json1_1DeleteUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserCommandOutput>;
export declare const deserializeAws_json1_1DescribeDirectoryConfigsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeDirectoryConfigsCommandOutput>;
export declare const deserializeAws_json1_1DescribeFleetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeFleetsCommandOutput>;
export declare const deserializeAws_json1_1DescribeImageBuildersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeImageBuildersCommandOutput>;
export declare const deserializeAws_json1_1DescribeImagePermissionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeImagePermissionsCommandOutput>;
export declare const deserializeAws_json1_1DescribeImagesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeImagesCommandOutput>;
export declare const deserializeAws_json1_1DescribeSessionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeSessionsCommandOutput>;
export declare const deserializeAws_json1_1DescribeStacksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStacksCommandOutput>;
export declare const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUsageReportSubscriptionsCommandOutput>;
export declare const deserializeAws_json1_1DescribeUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUsersCommandOutput>;
export declare const deserializeAws_json1_1DescribeUserStackAssociationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUserStackAssociationsCommandOutput>;
export declare const deserializeAws_json1_1DisableUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisableUserCommandOutput>;
export declare const deserializeAws_json1_1DisassociateFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateFleetCommandOutput>;
export declare const deserializeAws_json1_1EnableUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableUserCommandOutput>;
export declare const deserializeAws_json1_1ExpireSessionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExpireSessionCommandOutput>;
export declare const deserializeAws_json1_1ListAssociatedFleetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAssociatedFleetsCommandOutput>;
export declare const deserializeAws_json1_1ListAssociatedStacksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAssociatedStacksCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1StartFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartFleetCommandOutput>;
export declare const deserializeAws_json1_1StartImageBuilderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartImageBuilderCommandOutput>;
export declare const deserializeAws_json1_1StopFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopFleetCommandOutput>;
export declare const deserializeAws_json1_1StopImageBuilderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopImageBuilderCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateDirectoryConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDirectoryConfigCommandOutput>;
export declare const deserializeAws_json1_1UpdateFleetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateFleetCommandOutput>;
export declare const deserializeAws_json1_1UpdateImagePermissionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateImagePermissionsCommandOutput>;
export declare const deserializeAws_json1_1UpdateStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateStackCommandOutput>;
