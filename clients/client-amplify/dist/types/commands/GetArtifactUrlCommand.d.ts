import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { GetArtifactUrlRequest, GetArtifactUrlResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetArtifactUrlCommandInput extends GetArtifactUrlRequest {}
export interface GetArtifactUrlCommandOutput extends GetArtifactUrlResult, __MetadataBearer {}
/**
 * <p> Returns the artifact info that corresponds to an artifact id. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetArtifactUrlCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetArtifactUrlCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetArtifactUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetArtifactUrlCommandInput} for command's `input` shape.
 * @see {@link GetArtifactUrlCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetArtifactUrlCommand extends $Command<
  GetArtifactUrlCommandInput,
  GetArtifactUrlCommandOutput,
  AmplifyClientResolvedConfig
> {
  readonly input: GetArtifactUrlCommandInput;
  constructor(input: GetArtifactUrlCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetArtifactUrlCommandInput, GetArtifactUrlCommandOutput>;
  private serialize;
  private deserialize;
}
