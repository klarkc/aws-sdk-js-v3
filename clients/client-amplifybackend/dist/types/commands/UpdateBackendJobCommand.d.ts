import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { UpdateBackendJobRequest, UpdateBackendJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateBackendJobCommandInput extends UpdateBackendJobRequest {}
export interface UpdateBackendJobCommandOutput extends UpdateBackendJobResponse, __MetadataBearer {}
/**
 * <p>Updates a specific job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendJobCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendJobCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendJobCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBackendJobCommand extends $Command<
  UpdateBackendJobCommandInput,
  UpdateBackendJobCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: UpdateBackendJobCommandInput;
  constructor(input: UpdateBackendJobCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendJobCommandInput, UpdateBackendJobCommandOutput>;
  private serialize;
  private deserialize;
}
