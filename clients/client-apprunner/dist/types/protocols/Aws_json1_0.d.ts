import {
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "../commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "../commands/CreateAutoScalingConfigurationCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import {
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "../commands/DeleteAutoScalingConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import {
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "../commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "../commands/DescribeCustomDomainsCommand";
import { DescribeServiceCommandInput, DescribeServiceCommandOutput } from "../commands/DescribeServiceCommand";
import {
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "../commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PauseServiceCommandInput, PauseServiceCommandOutput } from "../commands/PauseServiceCommand";
import { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "../commands/ResumeServiceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_0AssociateCustomDomainCommand: (
  input: AssociateCustomDomainCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0CreateAutoScalingConfigurationCommand: (
  input: CreateAutoScalingConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0CreateConnectionCommand: (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0CreateServiceCommand: (
  input: CreateServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DeleteAutoScalingConfigurationCommand: (
  input: DeleteAutoScalingConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DeleteConnectionCommand: (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DeleteServiceCommand: (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DescribeAutoScalingConfigurationCommand: (
  input: DescribeAutoScalingConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DescribeCustomDomainsCommand: (
  input: DescribeCustomDomainsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DescribeServiceCommand: (
  input: DescribeServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DisassociateCustomDomainCommand: (
  input: DisassociateCustomDomainCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListAutoScalingConfigurationsCommand: (
  input: ListAutoScalingConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListConnectionsCommand: (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListOperationsCommand: (
  input: ListOperationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListServicesCommand: (
  input: ListServicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0PauseServiceCommand: (
  input: PauseServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ResumeServiceCommand: (
  input: ResumeServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0StartDeploymentCommand: (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0UpdateServiceCommand: (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_0AssociateCustomDomainCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateCustomDomainCommandOutput>;
export declare const deserializeAws_json1_0CreateAutoScalingConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAutoScalingConfigurationCommandOutput>;
export declare const deserializeAws_json1_0CreateConnectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateConnectionCommandOutput>;
export declare const deserializeAws_json1_0CreateServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateServiceCommandOutput>;
export declare const deserializeAws_json1_0DeleteAutoScalingConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAutoScalingConfigurationCommandOutput>;
export declare const deserializeAws_json1_0DeleteConnectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteConnectionCommandOutput>;
export declare const deserializeAws_json1_0DeleteServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteServiceCommandOutput>;
export declare const deserializeAws_json1_0DescribeAutoScalingConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeAutoScalingConfigurationCommandOutput>;
export declare const deserializeAws_json1_0DescribeCustomDomainsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeCustomDomainsCommandOutput>;
export declare const deserializeAws_json1_0DescribeServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeServiceCommandOutput>;
export declare const deserializeAws_json1_0DisassociateCustomDomainCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateCustomDomainCommandOutput>;
export declare const deserializeAws_json1_0ListAutoScalingConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAutoScalingConfigurationsCommandOutput>;
export declare const deserializeAws_json1_0ListConnectionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListConnectionsCommandOutput>;
export declare const deserializeAws_json1_0ListOperationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListOperationsCommandOutput>;
export declare const deserializeAws_json1_0ListServicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListServicesCommandOutput>;
export declare const deserializeAws_json1_0ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_0PauseServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PauseServiceCommandOutput>;
export declare const deserializeAws_json1_0ResumeServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResumeServiceCommandOutput>;
export declare const deserializeAws_json1_0StartDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeploymentCommandOutput>;
export declare const deserializeAws_json1_0TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_0UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_0UpdateServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateServiceCommandOutput>;
