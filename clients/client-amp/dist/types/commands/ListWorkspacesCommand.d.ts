import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { ListWorkspacesRequest, ListWorkspacesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListWorkspacesCommandInput extends ListWorkspacesRequest {}
export interface ListWorkspacesCommandOutput extends ListWorkspacesResponse, __MetadataBearer {}
/**
 * Lists all AMP workspaces, including workspaces being created or deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListWorkspacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListWorkspacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkspacesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkspacesCommand extends $Command<
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
  AmpClientResolvedConfig
> {
  readonly input: ListWorkspacesCommandInput;
  constructor(input: ListWorkspacesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkspacesCommandInput, ListWorkspacesCommandOutput>;
  private serialize;
  private deserialize;
}
