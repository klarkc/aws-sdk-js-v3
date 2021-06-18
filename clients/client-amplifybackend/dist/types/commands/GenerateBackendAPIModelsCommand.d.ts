import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { GenerateBackendAPIModelsRequest, GenerateBackendAPIModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GenerateBackendAPIModelsCommandInput extends GenerateBackendAPIModelsRequest {}
export interface GenerateBackendAPIModelsCommandOutput extends GenerateBackendAPIModelsResponse, __MetadataBearer {}
/**
 * <p>Generates a model schema for an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GenerateBackendAPIModelsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GenerateBackendAPIModelsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GenerateBackendAPIModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateBackendAPIModelsCommandInput} for command's `input` shape.
 * @see {@link GenerateBackendAPIModelsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateBackendAPIModelsCommand extends $Command<
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: GenerateBackendAPIModelsCommandInput;
  constructor(input: GenerateBackendAPIModelsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateBackendAPIModelsCommandInput, GenerateBackendAPIModelsCommandOutput>;
  private serialize;
  private deserialize;
}
