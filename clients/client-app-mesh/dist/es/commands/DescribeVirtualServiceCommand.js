import { __extends } from "tslib";
import { DescribeVirtualServiceInput, DescribeVirtualServiceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualServiceCommand,
  serializeAws_restJson1DescribeVirtualServiceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing virtual service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVirtualServiceCommand = /** @class */ (function (_super) {
  __extends(DescribeVirtualServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeVirtualServiceCommand(input) {
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
  DescribeVirtualServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeVirtualServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeVirtualServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualServiceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeVirtualServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeVirtualServiceCommand(input, context);
  };
  DescribeVirtualServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeVirtualServiceCommand(output, context);
  };
  return DescribeVirtualServiceCommand;
})($Command);
export { DescribeVirtualServiceCommand };
//# sourceMappingURL=DescribeVirtualServiceCommand.js.map
