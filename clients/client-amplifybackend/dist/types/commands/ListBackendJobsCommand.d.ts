import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { ListBackendJobsRequest, ListBackendJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBackendJobsCommandInput extends ListBackendJobsRequest {}
export interface ListBackendJobsCommandOutput extends ListBackendJobsResponse, __MetadataBearer {}
/**
 * <p>Lists the jobs for the backend of an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ListBackendJobsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ListBackendJobsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new ListBackendJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackendJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackendJobsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBackendJobsCommand extends $Command<
  ListBackendJobsCommandInput,
  ListBackendJobsCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: ListBackendJobsCommandInput;
  constructor(input: ListBackendJobsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackendJobsCommandInput, ListBackendJobsCommandOutput>;
  private serialize;
  private deserialize;
}
