import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { CancelQuantumTaskRequest, CancelQuantumTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CancelQuantumTaskCommandInput extends CancelQuantumTaskRequest {}
export interface CancelQuantumTaskCommandOutput extends CancelQuantumTaskResponse, __MetadataBearer {}
/**
 * <p>Cancels the specified task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CancelQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CancelQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new CancelQuantumTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link CancelQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelQuantumTaskCommand extends $Command<
  CancelQuantumTaskCommandInput,
  CancelQuantumTaskCommandOutput,
  BraketClientResolvedConfig
> {
  readonly input: CancelQuantumTaskCommandInput;
  constructor(input: CancelQuantumTaskCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelQuantumTaskCommandInput, CancelQuantumTaskCommandOutput>;
  private serialize;
  private deserialize;
}
