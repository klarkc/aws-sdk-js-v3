import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { CloneBackendRequest, CloneBackendResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CloneBackendCommandInput extends CloneBackendRequest {}
export interface CloneBackendCommandOutput extends CloneBackendResponse, __MetadataBearer {}
/**
 * <p>This operation clones an existing backend.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CloneBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CloneBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CloneBackendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloneBackendCommandInput} for command's `input` shape.
 * @see {@link CloneBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CloneBackendCommand extends $Command<
  CloneBackendCommandInput,
  CloneBackendCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: CloneBackendCommandInput;
  constructor(input: CloneBackendCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloneBackendCommandInput, CloneBackendCommandOutput>;
  private serialize;
  private deserialize;
}
