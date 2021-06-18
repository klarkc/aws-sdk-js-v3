import { __extends } from "tslib";
import { DescribeVirtualNodeInput, DescribeVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualNodeCommand,
  serializeAws_restJson1DescribeVirtualNodeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing virtual node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVirtualNodeCommand = /** @class */ (function (_super) {
  __extends(DescribeVirtualNodeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeVirtualNodeCommand(input) {
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
  DescribeVirtualNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeVirtualNodeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualNodeOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeVirtualNodeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeVirtualNodeCommand(input, context);
  };
  DescribeVirtualNodeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeVirtualNodeCommand(output, context);
  };
  return DescribeVirtualNodeCommand;
})($Command);
export { DescribeVirtualNodeCommand };
//# sourceMappingURL=DescribeVirtualNodeCommand.js.map
