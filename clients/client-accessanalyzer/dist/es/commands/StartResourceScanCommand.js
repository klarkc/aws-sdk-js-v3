import { __extends } from "tslib";
import { StartResourceScanRequest } from "../models/models_0";
import {
  deserializeAws_restJson1StartResourceScanCommand,
  serializeAws_restJson1StartResourceScanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Immediately starts a scan of the policies applied to the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartResourceScanCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartResourceScanCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new StartResourceScanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartResourceScanCommandInput} for command's `input` shape.
 * @see {@link StartResourceScanCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartResourceScanCommand = /** @class */ (function (_super) {
  __extends(StartResourceScanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartResourceScanCommand(input) {
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
  StartResourceScanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "StartResourceScanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartResourceScanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartResourceScanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartResourceScanCommand(input, context);
  };
  StartResourceScanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartResourceScanCommand(output, context);
  };
  return StartResourceScanCommand;
})($Command);
export { StartResourceScanCommand };
//# sourceMappingURL=StartResourceScanCommand.js.map
