import { __extends } from "tslib";
import { DescribeServiceRequest, DescribeServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeServiceCommand,
  serializeAws_json1_0DescribeServiceCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Return a full description of an AWS App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceCommand = /** @class */ (function (_super) {
  __extends(DescribeServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeServiceCommand(input) {
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
  DescribeServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "DescribeServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0DescribeServiceCommand(input, context);
  };
  DescribeServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0DescribeServiceCommand(output, context);
  };
  return DescribeServiceCommand;
})($Command);
export { DescribeServiceCommand };
//# sourceMappingURL=DescribeServiceCommand.js.map
