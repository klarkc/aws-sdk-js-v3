import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateWorkGroupCommandInput extends UpdateWorkGroupInput {}
export interface UpdateWorkGroupCommandOutput extends UpdateWorkGroupOutput, __MetadataBearer {}
/**
 * <p>Updates the workgroup with the specified name. The workgroup's name cannot be
 *             changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdateWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkGroupCommand extends $Command<
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: UpdateWorkGroupCommandInput;
  constructor(input: UpdateWorkGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput>;
  private serialize;
  private deserialize;
}
