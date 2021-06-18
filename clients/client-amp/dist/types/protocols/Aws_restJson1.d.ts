import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "../commands/CreateWorkspaceCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "../commands/DeleteWorkspaceCommand";
import { DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput } from "../commands/DescribeWorkspaceCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "../commands/ListWorkspacesCommand";
import {
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
} from "../commands/UpdateWorkspaceAliasCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateWorkspaceCommand: (
  input: CreateWorkspaceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteWorkspaceCommand: (
  input: DeleteWorkspaceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeWorkspaceCommand: (
  input: DescribeWorkspaceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListWorkspacesCommand: (
  input: ListWorkspacesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateWorkspaceAliasCommand: (
  input: UpdateWorkspaceAliasCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateWorkspaceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateWorkspaceCommandOutput>;
export declare const deserializeAws_restJson1DeleteWorkspaceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteWorkspaceCommandOutput>;
export declare const deserializeAws_restJson1DescribeWorkspaceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeWorkspaceCommandOutput>;
export declare const deserializeAws_restJson1ListWorkspacesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListWorkspacesCommandOutput>;
export declare const deserializeAws_restJson1UpdateWorkspaceAliasCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateWorkspaceAliasCommandOutput>;
