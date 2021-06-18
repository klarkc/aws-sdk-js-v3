import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { UpdateWorkspaceAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateWorkspaceAliasCommandInput extends UpdateWorkspaceAliasRequest {}
export interface UpdateWorkspaceAliasCommandOutput extends __MetadataBearer {}
/**
 * Updates an AMP workspace alias.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateWorkspaceAliasCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateWorkspaceAliasCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new UpdateWorkspaceAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkspaceAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAliasCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkspaceAliasCommand extends $Command<
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
  AmpClientResolvedConfig
> {
  readonly input: UpdateWorkspaceAliasCommandInput;
  constructor(input: UpdateWorkspaceAliasCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkspaceAliasCommandInput, UpdateWorkspaceAliasCommandOutput>;
  private serialize;
  private deserialize;
}
