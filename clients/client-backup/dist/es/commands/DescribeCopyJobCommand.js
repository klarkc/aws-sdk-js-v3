import { __extends } from "tslib";
import { DescribeCopyJobInput, DescribeCopyJobOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCopyJobCommand,
  serializeAws_restJson1DescribeCopyJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata associated with creating a copy of a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeCopyJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeCopyJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeCopyJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCopyJobCommandInput} for command's `input` shape.
 * @see {@link DescribeCopyJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCopyJobCommand = /** @class */ (function (_super) {
  __extends(DescribeCopyJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeCopyJobCommand(input) {
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
  DescribeCopyJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeCopyJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeCopyJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCopyJobOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeCopyJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeCopyJobCommand(input, context);
  };
  DescribeCopyJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeCopyJobCommand(output, context);
  };
  return DescribeCopyJobCommand;
})($Command);
export { DescribeCopyJobCommand };
//# sourceMappingURL=DescribeCopyJobCommand.js.map
