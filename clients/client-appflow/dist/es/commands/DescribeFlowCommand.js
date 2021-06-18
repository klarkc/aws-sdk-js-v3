import { __extends } from "tslib";
import { DescribeFlowRequest, DescribeFlowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFlowCommand,
  serializeAws_restJson1DescribeFlowCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Provides a description of the specified flow.
 *
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFlowCommand = /** @class */ (function (_super) {
  __extends(DescribeFlowCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeFlowCommand(input) {
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
  DescribeFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "DescribeFlowCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlowResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeFlowCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeFlowCommand(input, context);
  };
  DescribeFlowCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeFlowCommand(output, context);
  };
  return DescribeFlowCommand;
})($Command);
export { DescribeFlowCommand };
//# sourceMappingURL=DescribeFlowCommand.js.map
