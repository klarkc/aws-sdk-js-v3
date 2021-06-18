import { __extends } from "tslib";
import { DescribeWorkspaceRequest, DescribeWorkspaceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeWorkspaceCommand,
  serializeAws_restJson1DescribeWorkspaceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Describes an existing AMP workspace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeWorkspaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeWorkspaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new DescribeWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkspaceCommand = /** @class */ (function (_super) {
  __extends(DescribeWorkspaceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeWorkspaceCommand(input) {
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
  DescribeWorkspaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmpClient";
    var commandName = "DescribeWorkspaceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeWorkspaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeWorkspaceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeWorkspaceCommand(input, context);
  };
  DescribeWorkspaceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeWorkspaceCommand(output, context);
  };
  return DescribeWorkspaceCommand;
})($Command);
export { DescribeWorkspaceCommand };
//# sourceMappingURL=DescribeWorkspaceCommand.js.map
