import { __extends } from "tslib";
import { DescribeVirtualRouterInput, DescribeVirtualRouterOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualRouterCommand,
  serializeAws_restJson1DescribeVirtualRouterCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing virtual router.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVirtualRouterCommand = /** @class */ (function (_super) {
  __extends(DescribeVirtualRouterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeVirtualRouterCommand(input) {
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
  DescribeVirtualRouterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeVirtualRouterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeVirtualRouterInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualRouterOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeVirtualRouterCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeVirtualRouterCommand(input, context);
  };
  DescribeVirtualRouterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeVirtualRouterCommand(output, context);
  };
  return DescribeVirtualRouterCommand;
})($Command);
export { DescribeVirtualRouterCommand };
//# sourceMappingURL=DescribeVirtualRouterCommand.js.map
