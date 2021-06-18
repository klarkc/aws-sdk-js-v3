import { __extends } from "tslib";
import { DescribeVirtualGatewayInput, DescribeVirtualGatewayOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualGatewayCommand,
  serializeAws_restJson1DescribeVirtualGatewayCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing virtual gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVirtualGatewayCommand = /** @class */ (function (_super) {
  __extends(DescribeVirtualGatewayCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeVirtualGatewayCommand(input) {
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
  DescribeVirtualGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeVirtualGatewayCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualGatewayOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeVirtualGatewayCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeVirtualGatewayCommand(input, context);
  };
  DescribeVirtualGatewayCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeVirtualGatewayCommand(output, context);
  };
  return DescribeVirtualGatewayCommand;
})($Command);
export { DescribeVirtualGatewayCommand };
//# sourceMappingURL=DescribeVirtualGatewayCommand.js.map
