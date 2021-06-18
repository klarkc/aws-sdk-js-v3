import { __extends } from "tslib";
import { DescribeRouteInput, DescribeRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRouteCommand,
  serializeAws_restJson1DescribeRouteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRouteCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRouteCommand = /** @class */ (function (_super) {
  __extends(DescribeRouteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeRouteCommand(input) {
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
  DescribeRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeRouteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRouteOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeRouteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeRouteCommand(input, context);
  };
  DescribeRouteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeRouteCommand(output, context);
  };
  return DescribeRouteCommand;
})($Command);
export { DescribeRouteCommand };
//# sourceMappingURL=DescribeRouteCommand.js.map
