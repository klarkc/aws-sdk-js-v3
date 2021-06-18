import { __extends } from "tslib";
import { DescribeGatewayRouteInput, DescribeGatewayRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeGatewayRouteCommand,
  serializeAws_restJson1DescribeGatewayRouteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGatewayRouteCommand = /** @class */ (function (_super) {
  __extends(DescribeGatewayRouteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeGatewayRouteCommand(input) {
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
  DescribeGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeGatewayRouteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeGatewayRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGatewayRouteOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeGatewayRouteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeGatewayRouteCommand(input, context);
  };
  DescribeGatewayRouteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeGatewayRouteCommand(output, context);
  };
  return DescribeGatewayRouteCommand;
})($Command);
export { DescribeGatewayRouteCommand };
//# sourceMappingURL=DescribeGatewayRouteCommand.js.map
