import { AmpClient } from "./AmpClient";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "./commands/CreateWorkspaceCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "./commands/DeleteWorkspaceCommand";
import { DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput } from "./commands/DescribeWorkspaceCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "./commands/ListWorkspacesCommand";
import {
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
} from "./commands/UpdateWorkspaceAliasCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * Amazon Managed Service for Prometheus
 */
export declare class Amp extends AmpClient {
  /**
   * Creates a new AMP workspace.
   */
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  createWorkspace(args: CreateWorkspaceCommandInput, cb: (err: any, data?: CreateWorkspaceCommandOutput) => void): void;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  /**
   * Deletes an AMP workspace.
   */
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  deleteWorkspace(args: DeleteWorkspaceCommandInput, cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void): void;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  /**
   * Describes an existing AMP workspace.
   */
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  /**
   * Lists all AMP workspaces, including workspaces being created or deleted.
   */
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(args: ListWorkspacesCommandInput, cb: (err: any, data?: ListWorkspacesCommandOutput) => void): void;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  /**
   * Updates an AMP workspace alias.
   */
  updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceAliasCommandOutput>;
  updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    cb: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): void;
  updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): void;
}
