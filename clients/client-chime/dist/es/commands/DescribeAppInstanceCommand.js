import { __extends } from "tslib";
import { DescribeAppInstanceRequest, DescribeAppInstanceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppInstanceCommand,
  serializeAws_restJson1DescribeAppInstanceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the full details of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeAppInstanceCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeAppInstanceCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAppInstanceCommand = /** @class */ (function (_super) {
  __extends(DescribeAppInstanceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAppInstanceCommand(input) {
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
  DescribeAppInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DescribeAppInstanceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppInstanceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAppInstanceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeAppInstanceCommand(input, context);
  };
  DescribeAppInstanceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeAppInstanceCommand(output, context);
  };
  return DescribeAppInstanceCommand;
})($Command);
export { DescribeAppInstanceCommand };
//# sourceMappingURL=DescribeAppInstanceCommand.js.map
