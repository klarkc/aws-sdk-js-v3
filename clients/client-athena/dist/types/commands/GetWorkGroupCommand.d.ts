import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetWorkGroupInput, GetWorkGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetWorkGroupCommandInput extends GetWorkGroupInput {}
export interface GetWorkGroupCommandOutput extends GetWorkGroupOutput, __MetadataBearer {}
/**
 * <p>Returns information about the workgroup with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorkGroupCommand extends $Command<
  GetWorkGroupCommandInput,
  GetWorkGroupCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: GetWorkGroupCommandInput;
  constructor(input: GetWorkGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkGroupCommandInput, GetWorkGroupCommandOutput>;
  private serialize;
  private deserialize;
}
