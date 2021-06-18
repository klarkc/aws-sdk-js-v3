import { CreateGatewayRouteCommandInput, CreateGatewayRouteCommandOutput } from "../commands/CreateGatewayRouteCommand";
import { CreateMeshCommandInput, CreateMeshCommandOutput } from "../commands/CreateMeshCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "../commands/CreateRouteCommand";
import {
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
} from "../commands/CreateVirtualGatewayCommand";
import { CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput } from "../commands/CreateVirtualNodeCommand";
import {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
} from "../commands/CreateVirtualRouterCommand";
import {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
} from "../commands/CreateVirtualServiceCommand";
import { DeleteGatewayRouteCommandInput, DeleteGatewayRouteCommandOutput } from "../commands/DeleteGatewayRouteCommand";
import { DeleteMeshCommandInput, DeleteMeshCommandOutput } from "../commands/DeleteMeshCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "../commands/DeleteRouteCommand";
import {
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
} from "../commands/DeleteVirtualGatewayCommand";
import { DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput } from "../commands/DeleteVirtualNodeCommand";
import {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
} from "../commands/DeleteVirtualRouterCommand";
import {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput,
} from "../commands/DeleteVirtualServiceCommand";
import {
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
} from "../commands/DescribeGatewayRouteCommand";
import { DescribeMeshCommandInput, DescribeMeshCommandOutput } from "../commands/DescribeMeshCommand";
import { DescribeRouteCommandInput, DescribeRouteCommandOutput } from "../commands/DescribeRouteCommand";
import {
  DescribeVirtualGatewayCommandInput,
  DescribeVirtualGatewayCommandOutput,
} from "../commands/DescribeVirtualGatewayCommand";
import {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
} from "../commands/DescribeVirtualNodeCommand";
import {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput,
} from "../commands/DescribeVirtualRouterCommand";
import {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput,
} from "../commands/DescribeVirtualServiceCommand";
import { ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput } from "../commands/ListGatewayRoutesCommand";
import { ListMeshesCommandInput, ListMeshesCommandOutput } from "../commands/ListMeshesCommand";
import { ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "../commands/ListVirtualGatewaysCommand";
import { ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput } from "../commands/ListVirtualNodesCommand";
import { ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput } from "../commands/ListVirtualRoutersCommand";
import {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "../commands/ListVirtualServicesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGatewayRouteCommandInput, UpdateGatewayRouteCommandOutput } from "../commands/UpdateGatewayRouteCommand";
import { UpdateMeshCommandInput, UpdateMeshCommandOutput } from "../commands/UpdateMeshCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "../commands/UpdateRouteCommand";
import {
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
} from "../commands/UpdateVirtualGatewayCommand";
import { UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput } from "../commands/UpdateVirtualNodeCommand";
import {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
} from "../commands/UpdateVirtualRouterCommand";
import {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
} from "../commands/UpdateVirtualServiceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateGatewayRouteCommand: (
  input: CreateGatewayRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateMeshCommand: (
  input: CreateMeshCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateRouteCommand: (
  input: CreateRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateVirtualGatewayCommand: (
  input: CreateVirtualGatewayCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateVirtualNodeCommand: (
  input: CreateVirtualNodeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateVirtualRouterCommand: (
  input: CreateVirtualRouterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateVirtualServiceCommand: (
  input: CreateVirtualServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteGatewayRouteCommand: (
  input: DeleteGatewayRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteMeshCommand: (
  input: DeleteMeshCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRouteCommand: (
  input: DeleteRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteVirtualGatewayCommand: (
  input: DeleteVirtualGatewayCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteVirtualNodeCommand: (
  input: DeleteVirtualNodeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteVirtualRouterCommand: (
  input: DeleteVirtualRouterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteVirtualServiceCommand: (
  input: DeleteVirtualServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeGatewayRouteCommand: (
  input: DescribeGatewayRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeMeshCommand: (
  input: DescribeMeshCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeRouteCommand: (
  input: DescribeRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeVirtualGatewayCommand: (
  input: DescribeVirtualGatewayCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeVirtualNodeCommand: (
  input: DescribeVirtualNodeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeVirtualRouterCommand: (
  input: DescribeVirtualRouterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeVirtualServiceCommand: (
  input: DescribeVirtualServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListGatewayRoutesCommand: (
  input: ListGatewayRoutesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListMeshesCommand: (
  input: ListMeshesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRoutesCommand: (
  input: ListRoutesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListVirtualGatewaysCommand: (
  input: ListVirtualGatewaysCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListVirtualNodesCommand: (
  input: ListVirtualNodesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListVirtualRoutersCommand: (
  input: ListVirtualRoutersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListVirtualServicesCommand: (
  input: ListVirtualServicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateGatewayRouteCommand: (
  input: UpdateGatewayRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateMeshCommand: (
  input: UpdateMeshCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateRouteCommand: (
  input: UpdateRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateVirtualGatewayCommand: (
  input: UpdateVirtualGatewayCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateVirtualNodeCommand: (
  input: UpdateVirtualNodeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateVirtualRouterCommand: (
  input: UpdateVirtualRouterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateVirtualServiceCommand: (
  input: UpdateVirtualServiceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateGatewayRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateGatewayRouteCommandOutput>;
export declare const deserializeAws_restJson1CreateMeshCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateMeshCommandOutput>;
export declare const deserializeAws_restJson1CreateRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateRouteCommandOutput>;
export declare const deserializeAws_restJson1CreateVirtualGatewayCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVirtualGatewayCommandOutput>;
export declare const deserializeAws_restJson1CreateVirtualNodeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVirtualNodeCommandOutput>;
export declare const deserializeAws_restJson1CreateVirtualRouterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVirtualRouterCommandOutput>;
export declare const deserializeAws_restJson1CreateVirtualServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVirtualServiceCommandOutput>;
export declare const deserializeAws_restJson1DeleteGatewayRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteGatewayRouteCommandOutput>;
export declare const deserializeAws_restJson1DeleteMeshCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteMeshCommandOutput>;
export declare const deserializeAws_restJson1DeleteRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRouteCommandOutput>;
export declare const deserializeAws_restJson1DeleteVirtualGatewayCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVirtualGatewayCommandOutput>;
export declare const deserializeAws_restJson1DeleteVirtualNodeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVirtualNodeCommandOutput>;
export declare const deserializeAws_restJson1DeleteVirtualRouterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVirtualRouterCommandOutput>;
export declare const deserializeAws_restJson1DeleteVirtualServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVirtualServiceCommandOutput>;
export declare const deserializeAws_restJson1DescribeGatewayRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeGatewayRouteCommandOutput>;
export declare const deserializeAws_restJson1DescribeMeshCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeMeshCommandOutput>;
export declare const deserializeAws_restJson1DescribeRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeRouteCommandOutput>;
export declare const deserializeAws_restJson1DescribeVirtualGatewayCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeVirtualGatewayCommandOutput>;
export declare const deserializeAws_restJson1DescribeVirtualNodeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeVirtualNodeCommandOutput>;
export declare const deserializeAws_restJson1DescribeVirtualRouterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeVirtualRouterCommandOutput>;
export declare const deserializeAws_restJson1DescribeVirtualServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeVirtualServiceCommandOutput>;
export declare const deserializeAws_restJson1ListGatewayRoutesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGatewayRoutesCommandOutput>;
export declare const deserializeAws_restJson1ListMeshesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListMeshesCommandOutput>;
export declare const deserializeAws_restJson1ListRoutesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRoutesCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1ListVirtualGatewaysCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListVirtualGatewaysCommandOutput>;
export declare const deserializeAws_restJson1ListVirtualNodesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListVirtualNodesCommandOutput>;
export declare const deserializeAws_restJson1ListVirtualRoutersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListVirtualRoutersCommandOutput>;
export declare const deserializeAws_restJson1ListVirtualServicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListVirtualServicesCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateGatewayRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGatewayRouteCommandOutput>;
export declare const deserializeAws_restJson1UpdateMeshCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateMeshCommandOutput>;
export declare const deserializeAws_restJson1UpdateRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRouteCommandOutput>;
export declare const deserializeAws_restJson1UpdateVirtualGatewayCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateVirtualGatewayCommandOutput>;
export declare const deserializeAws_restJson1UpdateVirtualNodeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateVirtualNodeCommandOutput>;
export declare const deserializeAws_restJson1UpdateVirtualRouterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateVirtualRouterCommandOutput>;
export declare const deserializeAws_restJson1UpdateVirtualServiceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateVirtualServiceCommandOutput>;
