import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutAppInstanceStreamingConfigurationsRequest,
  PutAppInstanceStreamingConfigurationsResponse,
} from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutAppInstanceStreamingConfigurationsCommandInput
  extends PutAppInstanceStreamingConfigurationsRequest {}
export interface PutAppInstanceStreamingConfigurationsCommandOutput
  extends PutAppInstanceStreamingConfigurationsResponse,
    __MetadataBearer {}
/**
 * <p>The data streaming configurations of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAppInstanceStreamingConfigurationsCommand extends $Command<
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: PutAppInstanceStreamingConfigurationsCommandInput;
  constructor(input: PutAppInstanceStreamingConfigurationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppInstanceStreamingConfigurationsCommandInput, PutAppInstanceStreamingConfigurationsCommandOutput>;
  private serialize;
  private deserialize;
}
