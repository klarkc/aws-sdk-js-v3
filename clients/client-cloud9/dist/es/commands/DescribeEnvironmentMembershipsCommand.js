import { __extends } from "tslib";
import { DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEnvironmentMembershipsCommand,
  serializeAws_json1_1DescribeEnvironmentMembershipsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about environment members for an AWS Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentMembershipsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentMembershipsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentMembershipsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentMembershipsCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentMembershipsCommand = /** @class */ (function (_super) {
  __extends(DescribeEnvironmentMembershipsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeEnvironmentMembershipsCommand(input) {
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
  DescribeEnvironmentMembershipsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "DescribeEnvironmentMembershipsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeEnvironmentMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentMembershipsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeEnvironmentMembershipsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeEnvironmentMembershipsCommand(input, context);
  };
  DescribeEnvironmentMembershipsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeEnvironmentMembershipsCommand(output, context);
  };
  return DescribeEnvironmentMembershipsCommand;
})($Command);
export { DescribeEnvironmentMembershipsCommand };
//# sourceMappingURL=DescribeEnvironmentMembershipsCommand.js.map
