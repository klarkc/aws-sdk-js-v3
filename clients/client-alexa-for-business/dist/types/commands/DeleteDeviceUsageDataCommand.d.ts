import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteDeviceUsageDataCommandInput extends DeleteDeviceUsageDataRequest {}
export interface DeleteDeviceUsageDataCommandOutput extends DeleteDeviceUsageDataResponse, __MetadataBearer {}
/**
 * <p>When this action is called for a specified shared device, it allows authorized users to
 *          delete the device's entire previous history of voice input data and associated response
 *          data. This action can be called once every 24 hours for a specific shared device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteDeviceUsageDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceUsageDataCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceUsageDataCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeviceUsageDataCommand extends $Command<
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: DeleteDeviceUsageDataCommandInput;
  constructor(input: DeleteDeviceUsageDataCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput>;
  private serialize;
  private deserialize;
}
