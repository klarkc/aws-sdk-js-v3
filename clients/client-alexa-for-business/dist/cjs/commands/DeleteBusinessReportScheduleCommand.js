"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBusinessReportScheduleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the recurring report delivery schedule with the specified schedule
 *          ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteBusinessReportScheduleCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DeleteBusinessReportScheduleCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteBusinessReportScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeleteBusinessReportScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DeleteBusinessReportScheduleCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DeleteBusinessReportScheduleCommand(output, context);
  }
}
exports.DeleteBusinessReportScheduleCommand = DeleteBusinessReportScheduleCommand;
//# sourceMappingURL=DeleteBusinessReportScheduleCommand.js.map
