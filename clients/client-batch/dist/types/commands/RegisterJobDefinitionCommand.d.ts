import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { RegisterJobDefinitionRequest, RegisterJobDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RegisterJobDefinitionCommandInput extends RegisterJobDefinitionRequest {}
export interface RegisterJobDefinitionCommandOutput extends RegisterJobDefinitionResponse, __MetadataBearer {}
/**
 * <p>Registers an AWS Batch job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, RegisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, RegisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterJobDefinitionCommand extends $Command<
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
  BatchClientResolvedConfig
> {
  readonly input: RegisterJobDefinitionCommandInput;
  constructor(input: RegisterJobDefinitionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterJobDefinitionCommandInput, RegisterJobDefinitionCommandOutput>;
  private serialize;
  private deserialize;
}
