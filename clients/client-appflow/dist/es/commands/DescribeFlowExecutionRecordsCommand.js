import { __extends } from "tslib";
import { DescribeFlowExecutionRecordsRequest, DescribeFlowExecutionRecordsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFlowExecutionRecordsCommand,
  serializeAws_restJson1DescribeFlowExecutionRecordsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Fetches the execution history of the flow.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeFlowExecutionRecordsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeFlowExecutionRecordsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeFlowExecutionRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlowExecutionRecordsCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowExecutionRecordsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFlowExecutionRecordsCommand = /** @class */ (function (_super) {
  __extends(DescribeFlowExecutionRecordsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeFlowExecutionRecordsCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  DescribeFlowExecutionRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "DescribeFlowExecutionRecordsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeFlowExecutionRecordsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlowExecutionRecordsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeFlowExecutionRecordsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeFlowExecutionRecordsCommand(input, context);
  };
  DescribeFlowExecutionRecordsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeFlowExecutionRecordsCommand(output, context);
  };
  return DescribeFlowExecutionRecordsCommand;
})($Command);
export { DescribeFlowExecutionRecordsCommand };
//# sourceMappingURL=DescribeFlowExecutionRecordsCommand.js.map
