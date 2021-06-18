import { __extends } from "tslib";
import { UpdateDataCatalogInput, UpdateDataCatalogOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDataCatalogCommand,
  serializeAws_json1_1UpdateDataCatalogCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the data catalog that has the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdateDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link UpdateDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataCatalogCommand = /** @class */ (function (_super) {
  __extends(UpdateDataCatalogCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDataCatalogCommand(input) {
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
  UpdateDataCatalogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "UpdateDataCatalogCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDataCatalogInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDataCatalogOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDataCatalogCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateDataCatalogCommand(input, context);
  };
  UpdateDataCatalogCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateDataCatalogCommand(output, context);
  };
  return UpdateDataCatalogCommand;
})($Command);
export { UpdateDataCatalogCommand };
//# sourceMappingURL=UpdateDataCatalogCommand.js.map
